// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { UsersManagementService } from './users-management.service';
// import { CreateUsersManagementDto } from './dto/create-users-management.dto';
// import { UpdateUsersManagementDto } from './dto/update-users-management.dto';

// @Controller('users-management')
// export class UsersManagementController {
//   constructor(
//     private readonly usersManagementService: UsersManagementService,
//   ) {}

//   @Post()
//   create(@Body() createUsersManagementDto: CreateUsersManagementDto) {
//     return this.usersManagementService.create(createUsersManagementDto);
//   }

//   @Get()
//   public async findAll() {
//     return await this.usersManagementService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersManagementService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateUsersManagementDto: UpdateUsersManagementDto,
//   ) {
//     return this.usersManagementService.update(+id, updateUsersManagementDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersManagementService.remove(+id);
//   }
// }
