import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CommentCreateDto {
    @Field()
    content: string;

    @Field()
    authorId: number;

    @Field()
    postId: number;
}

@InputType()
export class CommentUpdateDto {
    @Field({ nullable: true })
    content?: string;
}