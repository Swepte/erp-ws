import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersManagementModule } from './users-management/users-management.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersManagementModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
