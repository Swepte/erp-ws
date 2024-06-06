import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersManagementDto } from './create-users-management.dto';
import { PickType } from '@nestjs/swagger';
import { UsersManagement } from '../entities/users-management.entity';

export class UpdateUsersManagementDto extends PickType(UsersManagement, [
  'email',
  'hash',
]) {}
