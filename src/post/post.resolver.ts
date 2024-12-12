import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { PostCreateDto, PostUpdateDto } from "./DTO/post.input";

@Resolver(() => Post)
export class PostResolver {
    constructor(private postService: PostService) {}

    @Query(() => [Post])
    async getPosts(@Args('category') category: string): Promise<Post[]> {
        return this.postService.getAllPosts(category);
    }

    @Query(() => Post)
    async getPost(@Args('id') id: number): Promise<Post> {
        return this.postService.getPost(id);
    }

    @Mutation(() => Post)
    async createPost(@Args('data') postCreateDto: PostCreateDto): Promise<Post> {
        return this.postService.createPost(postCreateDto);
    }

    @Mutation(() => Post)
    async updatePost(@Args('id') id: number, @Args('data') postUpdateDto: PostUpdateDto): Promise<Post> {
        return this.postService.updatePost(id, postUpdateDto);
    }

    @Mutation(() => Post)
    async deletePost(@Args('id') id: number): Promise<Post> {
        return this.postService.deletePost(id);
    }
}