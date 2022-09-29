import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessageController {
    @Get()
    listMessages() {

    }
    @Post()
    createMessage() {

    }
    @Get("/:id")
    getMessage() {

    }
}
