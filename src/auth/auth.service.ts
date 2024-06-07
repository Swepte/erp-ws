import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersManagementService } from 'src/users-management/users-management.service';

@Injectable()
export class AuthService {
  constructor(private userManagement: UsersManagementService) {}

  public async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userManagement.findOne(username);
    if (user?.hash !== pass) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthActionService } from '../../../../libs/authV2/src';
import { UserAccount } from 'apps/metrolab-erp/src/auth/entities/user-account.entity';
import { PrismaService } from '@app/prisma';
import { UserVerify } from 'apps/metrolab-erp/src/auth/dto/user-verify.dto';
import * as argon from 'argon2';
import { MetrolabUserType } from 'apps/metrolab-erp/roles/MetrolabUserType';
import {
  ReceptionistList,
  MakerList,
  CheckerList,
} from '../../roles/MetrolabUserType';

@Injectable()
export class MetrolabErpAuthActionService {
  constructor(
    private authActionService: AuthActionService,
    private prismaService: PrismaService,
  ) {}

  public async baseRegister(ownerId: string, dto: CreateAuthDto): Promise<any> {
    return await this.authActionService.safeRegister(ownerId, dto, 'METROLAB');
  }

  public async registerOne(ownerId: string, dto: CreateAuthDto) {
    const a = await this.baseRegister(ownerId, dto);
    return {
      data: new UserAccount(a),
    };
  }

  public async registerMany(ownerId: string, dtos: CreateAuthDto[]) {
    const as = await Promise.all(
      dtos.map(async (dto) => await this.baseRegister(ownerId, dto)),
    );
    return {
      data: as.map((a) => new UserAccount(a)),
    };
  }

  public async userVerify(userDto: UserVerify): Promise<any> {
    const x = await this.prismaService.userAccount.findFirst({
      where: {
        AND: {
          email: userDto.email,
          isDeleted: false,
        },
      },
    });
    if (x) {
      return await argon.verify(x.hash, userDto.password, {
        secret: Buffer.from(process.env.SECRET_KEY),
      });
    }

    return false;
  }

  public async setRole(
    targetUserId: string,
    userId: string,
    type: MetrolabUserType,
  ): Promise<any> {
    try {
      const user = await this.prismaService.userAccount.findUnique({
        where: {
          uuid: targetUserId,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const updated = await this.prismaService.userAccount.update({
        data: {
          roles:
            type === MetrolabUserType.RECEPTIONIST
              ? ReceptionistList
              : type === MetrolabUserType.MAKER
                ? MakerList
                : CheckerList,
          updatedBy: userId,
          metadata: {
            //@ts-expect-error metadata
            ...user.metadata,
            userType: type,
          },
        },
        where: {
          uuid: targetUserId,
        },
      });
      return { data: updated };
    } catch (err) {
      console.log(err);
    }
  }
}
