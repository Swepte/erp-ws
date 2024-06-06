import { Module } from '@nestjs/common';
import { UsersManagementService } from './users-management.service';
import { UsersManagementController } from './users-management.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UsersManagementController],
  providers: [UsersManagementService, PrismaClient],
  exports: [UsersManagementService],
})
export class UsersManagementModule {}
