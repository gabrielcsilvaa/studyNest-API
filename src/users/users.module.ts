import { Module } from "@nestjs/common";
import { usersServices } from "./users.services";
import { UsersController } from "./users.controller";

@Module({
    imports: [],
    providers: [usersServices],
    controllers: [UsersController]
})
export class UsersModule {}