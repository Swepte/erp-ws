/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersManagementService } from './users-management.service';
import { CreateUsersManagementDto } from './dto/create-users-management.dto';
import { UpdateUsersManagementDto } from './dto/update-users-management.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users-management')
@ApiTags('user-management')
export class UsersManagementController {
  constructor(
    private readonly usersManagementService: UsersManagementService,
  ) {}

  @Post('/register/one')
  create(@Body() createUsersManagementDto: CreateUsersManagementDto) {
    return this.usersManagementService.create(createUsersManagementDto);
  }

  @Get('/all')
  public async findAll() {
    return await this.usersManagementService.findAll();
  }

  @Get('/one/:id')
  findOne(@Param('id') id: string) {
    return this.usersManagementService.findOne(id);
  }

  @Patch('/update/one/:id')
  update(
    @Param('id') id: string,
    @Body() updateUsersManagementDto: UpdateUsersManagementDto,
  ) {
    return this.usersManagementService.update(+id, updateUsersManagementDto);
  }

  @Delete('/delete/one/:id')
  remove(@Param('id') id: string) {
    return this.usersManagementService.remove(+id);
  }
}
