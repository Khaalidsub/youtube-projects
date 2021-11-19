import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private logger = new Logger(PostsService.name);

  constructor(private prismaService: PrismaService) { }

  async create(createPostDto: CreatePostDto) {
    const result = await this.prismaService.post.create({ data: createPostDto });
    this.logger.log(`Post has been created : ${JSON.stringify(result)}`)
    return result
  }

  findAll(query?: Prisma.PostInclude) {
    return this.prismaService.post.findMany({ include: query });
  }

  findOne(id: string, query?: Prisma.PostInclude) {
    return this.prismaService.post.findUnique({ where: { id }, include: query });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const result = await this.prismaService.post.update({
      data: updatePostDto,
      where: { id },
    });
    this.logger.warn(`Post has been updated : ${JSON.stringify(result)}`)
    return result
  }

  async remove(id: string) {
    const result = await this.prismaService.post.delete({ where: { id } });
    this.logger.warn(`Post has been deleted : ${JSON.stringify(result)}`)
    return result
  }
}
