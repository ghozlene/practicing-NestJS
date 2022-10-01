import { Body, Controller, Delete, Get, Param, Patch, Post, Query, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
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

        const user = await this.usersService.findOne(parseInt(id));
        if (!user) {
            throw new NotFoundException('404-user not found');
        }
        return user;
    }

    @Get()
    async findAllUsers(

        @Query('email') email: string
    ) {

        return await this.usersService.find(email);
    }

    @Delete('/:id')
    async removeUser(
        @Param('id') id: string
    ) {
        return await this.usersService.remove(parseInt(id));
    }

    @Patch('/:id')
    async updateUser(
        @Param('id') id: string,
        @Body() body: UpdateUserDto
    ) {

        return await this.usersService.update(parseInt(id), body);
    }




}
