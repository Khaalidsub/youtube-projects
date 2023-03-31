import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    posts?: Prisma.CategoryCreateInput['posts'];
}
