import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from './DTO/user.input';

@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Query(() => User)
    async getUser(@Args('id') id: number):Promise<User> {
        return this.userService.getUser(id);
    }

    @Mutation(() => User)
    async createUser(@Args('data') userCreateDto: UserCreateDto): Promise<User> {
        return this.userService.createUser(userCreateDto);
    }

    @Mutation(() => User)
    async updateUser(@Args('id') id: number, @Args('data') userUpdateDto: UserUpdateDto): Promise<User> {
        return this.userService.updateUser(id, userUpdateDto);
    }

    @Mutation(() => User)
    async deleteUser(@Args('id') id: number): Promise<User> {
        return this.userService.deleteUser(id);
    }
}