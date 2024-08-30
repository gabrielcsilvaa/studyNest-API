import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { usersServices } from "./users.services";
import { CreateUserDto } from "./dtos/creater-user.dto";

@Controller('users')
export class UsersController {
    constructor (private readonly usersServices: usersServices) {}

    @Get()
    findAll() {
        return this.usersServices.findAll()
    }
    @Post()
    create(@Body() user: CreateUserDto) {
        if (!user.email || user.name) throw new BadRequestException('Inserir o email e nome')
        return this.usersServices.create(user)
    }
}