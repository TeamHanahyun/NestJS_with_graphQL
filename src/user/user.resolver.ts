import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

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
}