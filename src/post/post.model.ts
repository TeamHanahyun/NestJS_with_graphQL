import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.model";

@ObjectType()
export class Post {
    @Field(() => Int)
    id: Number;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    category: string;

    @Field()
    createdAt: Date;

    // @Field(() => User)
    // author: User;
}