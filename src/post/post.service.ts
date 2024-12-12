import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { PostCreateDto, PostUpdateDto } from "./DTO/post.input";

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}

    async getAllPosts(category: string) {
        return this.prisma.post.findMany({
            where: {category},
            include: {author: true}
        });
    }

    async getPost(id: number) {
        return this.prisma.post.findUnique({
            where: {id},
            include: {author: true}
        })
    }

    async createPost(postCreateDto: PostCreateDto) {
        return this.prisma.post.create({
            data: {
                title: postCreateDto.title,
                content: postCreateDto.content,
                category: postCreateDto.category,
                author: {
                    connect: { id: postCreateDto.authorId },
                },
            },
            include: {author: true},
        })
    }

    async updatePost(id: number, postUpdateDto: PostUpdateDto) {
        return this.prisma.post.update({
            where: {id},
            data: postUpdateDto,
            include: {author: true},
        })
    }

    async deletePost(id: number) {
        return this.prisma.post.delete({
            where: {id},
            include: {author: true},
        })
    }
}