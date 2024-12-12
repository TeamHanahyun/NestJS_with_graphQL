import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from "src/post/post.model";
import { User } from "src/user/user.model";

@ObjectType()
export class Comment {
    @Field(() => Int)
    id: number;

    @Field()
    content: string;

    @Field()
    createdAt: Date;

    @Field(() => User)
    author: User;

    @Field(() => Int)
    authorId: number;

    @Field(() => Post)
    post: Post;

    @Field(() => Int)
    postId: number;
}