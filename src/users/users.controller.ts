import { Body, Controller, Post } from '@nestjs/common';
import { request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post('/signup')
    async createUser(
        @Body() body: CreateUserDto) {

        await this.usersService.create(body.email, body.password);



    }


}
