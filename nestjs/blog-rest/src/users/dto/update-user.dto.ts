import { PartialType } from '@nestjs/mapped-types';
import { Post } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  posts?: Post[];
}
