import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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

    @Get('/:id')
    async findUser(
        @Param('id') id: string) {
        return await this.usersService.findOne(parseInt(id));
    }

    @Get()
    async findAllUsers(

        @Query('email') email: string
    ) {

        return this.usersService.find(email);
    }





}
