import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CommentCreateDto, CommentUpdateDto } from "./DTO/comment.input";

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {}

    async getComments(id: number) {
        return this.prisma.comment.findMany({
            where: {
                postId: id,
            },
            include: {
                author: true,
                post: true
            }
        })
    }

    async createComment(commentCreateDto: CommentCreateDto) {
        return this.prisma.comment.create({
            data: {
                content: commentCreateDto.content,
                author: {
                    connect: {id: commentCreateDto.authorId}
                },
                post: {
                    connect: {id: commentCreateDto.postId}
                }
            },
            include: {
                author: true, 
                post: true
            }
        })
    }

    async updateComment(id: number, commentUpdateDto: CommentUpdateDto) {
        return this.prisma.comment.update({
            where: {id},
            data: commentUpdateDto,
            include: {
                author: true,
                post: true
            }
        })
    }

    async deleteComment(id: number) {
        return this.prisma.comment.delete({
            where: {id},
            include: {
                author: true,
                post: true
            }
        })
    }
}