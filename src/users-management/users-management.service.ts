import { Injectable } from '@nestjs/common';
import { CreateUsersManagementDto } from './dto/create-users-management.dto';
import { UpdateUsersManagementDto } from './dto/update-users-management.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class UsersManagementService {
  constructor(private readonly prismaService: PrismaClient) {}
  create(createUsersManagementDto: CreateUsersManagementDto) {
    return 'This action adds a new usersManagement';
  }

  public async findAll() {
    const z = await this.prismaService.userAccount.findMany();
    console.log(z);
    return { data: z };
  }

  findOne(id: number) {
    return `This action returns a #${id} usersManagement`;
  }

  update(id: number, updateUsersManagementDto: UpdateUsersManagementDto) {
    return `This action updates a #${id} usersManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersManagement`;
  }
}
