import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);
  constructor(private prismaService: PrismaService) { }
  getUserByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } })
  }
  async create(createUserDto: CreateUserDto) {
    const result = await this.prismaService.user.create({ data: createUserDto });
    this.logger.log(`User has been created : ${JSON.stringify(result)}`)
    return result
  }

  findAll(query: Prisma.UserInclude) {
    return this.prismaService.user.findMany({ include: query });
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.prismaService.user.update({
      data: updateUserDto,
      where: { id },
    });
    this.logger.warn(`User has been updated : ${JSON.stringify(result)}`)
    return result
  }

  async remove(id: string) {

    const result = await this.prismaService.user.delete({ where: { id } });
    this.logger.warn(`User has been deleted : ${JSON.stringify(result)}`)
    return result
  }
}
