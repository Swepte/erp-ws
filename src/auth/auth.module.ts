import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersManagementModule } from 'src/users-management/users-management.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersManagementModule],
})
export class AuthModule {}
