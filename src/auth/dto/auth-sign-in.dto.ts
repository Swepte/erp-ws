import { PickType } from '@nestjs/swagger';
import { AuthSignIn } from '../entities/auth-sign-in.entity';
// import { UsersManagement } from '../entities/users-management.entity';

export class AuthSignInDto extends PickType(AuthSignIn, [
  'username',
  'password',
]) {}
