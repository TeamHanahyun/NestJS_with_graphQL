import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";

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
}