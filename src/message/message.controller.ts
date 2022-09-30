import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create.message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessageController {

    constructor(public messagesService: MessagesService) {

    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }
    @Get("/:id")
    async getMessage(
        @Param('id') id: any
    ) {
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException('404-message not found ');
        }
        return message;
    }
}
