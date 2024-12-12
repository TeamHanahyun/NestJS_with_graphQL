import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PostCreateDto {
    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    category: string;

    @Field()
    authorId: number;
}

@InputType()
export class PostUpdateDto {
    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    content?: string;

    @Field({ nullable: true })
    category?: string;
}