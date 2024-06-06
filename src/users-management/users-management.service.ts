import { Injectable } from '@nestjs/common';
import { CreateUsersManagementDto } from './dto/create-users-management.dto';
import { UpdateUsersManagementDto } from './dto/update-users-management.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class UsersManagementService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prismaService: PrismaClient) {}
  create(createUsersManagementDto: CreateUsersManagementDto) {
    const data = this.prismaService.userAccount.create({
      data: {
        ...createUsersManagementDto,
        // email: createUsersManagementDto.email,
        // hash: createUsersManagementDto.hash,
        // username: createUsersManagementDto.username,
      },
    });
    return data;
  }

  public async findAll() {
    const z = await this.prismaService.userAccount.findMany();
    console.log(z);
    return { data: z };
  }

  public async findOne(username: string) {
    const user = await this.prismaService.userAccount.findFirst({
      where: {
        username: username,
      },
    });
    return user;
  }

  update(id: number, updateUsersManagementDto: UpdateUsersManagementDto) {
    return `This action updates a #${id} usersManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersManagement`;
  }
}
