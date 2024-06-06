import { ApiProperty } from '@nestjs/swagger';

import { IsUUID, IsOptional, IsString } from 'class-validator';
import { DefaultEntity } from 'src/default-libraries/entity/default.entity';
export class UsersManagement extends DefaultEntity {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  hash: string;
}
