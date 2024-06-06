import { PickType } from '@nestjs/swagger';
import { UsersManagement } from '../entities/users-management.entity';

export class CreateUsersManagementDto extends PickType(UsersManagement, [
  'email',
  'username',
  'hash',
]) {}
