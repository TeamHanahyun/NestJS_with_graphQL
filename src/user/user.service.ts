import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UserCreateDto } from "./DTO/user.input";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    
    async getAllUsers() {
        return this.prisma.user.findMany();
    }

    async getUser(id: number) {
        return this.prisma.user.findUnique({
            where: {id},
        });
    }

    async createUser(userCreateDto: UserCreateDto) {
        return this.prisma.user.create({
            data: userCreateDto,
        });
    }
}