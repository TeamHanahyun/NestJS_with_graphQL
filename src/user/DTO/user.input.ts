import { Field, InputType } from "@nestjs/graphql";
import { isNullableType } from "graphql";

@InputType()
export class UserCreateDto {
    @Field()
    name: string;

    @Field()
    email: string;
}

@InputType()
export class UserUpdateDto {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;
}