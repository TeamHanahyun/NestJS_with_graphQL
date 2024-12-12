import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "src/user/user.model";
import { CommentService } from "./comment.service";
import { Comment } from "./comment.model";
import { CommentCreateDto, CommentUpdateDto } from "./DTO/comment.input";

@Resolver(() => User)
export class CommentResolver {
    constructor(private commentService: CommentService) {}
    
    @Query(() => [Comment])
    async getComments(@Args('id') id: number):Promise<Comment[]> {
        return this.commentService.getComments(id);
    }

    @Mutation(() => Comment)
    async createComment(@Args('data') commentCreateDto: CommentCreateDto): Promise<Comment> {
        return this.commentService.createComment(commentCreateDto);
    }

    @Mutation(() => Comment)
    async updateComment(@Args('id') id: number, @Args('data') commentUpdateDto: CommentUpdateDto): Promise<Comment> {
        return this.commentService.updateComment(id, commentUpdateDto);
    }

    @Mutation(() => Comment)
    async deleteComment(@Args('id') id: number): Promise<Comment> {
        return this.commentService.deleteComment(id);
    }
}