import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessageController {
    @Get()
    listMessages() {

    }
    @Post()
    createMessage(@Body() body: any) {
        console.log(body);
    }
    @Get("/:id")
    getMessage(
        @Param('id') id: any
    ) {
        console.log(id);
    }
}
