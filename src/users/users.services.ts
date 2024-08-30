import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/creater-user.dto";

global.users = []

@Injectable()

export class usersServices {
    findAll(): any[] {
        return global.users
    }
    
    create (user: CreateUserDto) {
        global.users.push(user)
    }
}