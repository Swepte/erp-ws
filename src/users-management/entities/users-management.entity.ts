import { ApiProperty } from '@nestjs/swagger';

import { IsUUID, IsOptional, IsString } from 'class-validator';
export class UsersManagement {
  @ApiProperty()
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}
