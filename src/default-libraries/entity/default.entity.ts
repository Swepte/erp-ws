import { ApiProperty } from '@nestjs/swagger';

import { Expose, Exclude } from 'class-transformer';
import { IsUUID } from 'class-validator';

// eslint-disable-next-line prettier/prettier
export abstract class DefaultEntity {
  @Exclude()
  id?: number;

  @ApiProperty()
  @Expose()
  @IsUUID()
  uuid?: string;

  @Exclude()
  createdAt?: Date;

  @Exclude()
  createdBy?: string;

  @Exclude()
  updatedAt?: Date;

  @Exclude()
  updatedBy?: string;

  @Exclude()
  deletedBy?: string;

  @Exclude()
  isDeleted?: boolean;

  @Exclude()
  ownerAccountId?: string;
}
