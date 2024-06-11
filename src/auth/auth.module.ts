import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersManagementModule } from 'src/users-management/users-management.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersManagementModule,
    JwtModule.register({
      secret: 'jamille',
      signOptions: { expiresIn: '60s' },
      global: true,
    }),
  ],
  //  imports: [
  //   UsersManagementModule,
  //   JwtModule.registerAsync({
  //     // secret: process.env.JWT_SECRET,
  //     inject:[ConfigModule]
  //     signOptions: { expiresIn: '60s' },
  //     global: true,
  //   }),
  // ],
})
export class AuthModule {}
