import { Controller, Get } from "@nestjs/common";

@Controller('api')
export class AppController {

    @Get('/root')
    getRootRoute() {
        return 'hi there';
    }

    @Get('/end')
    getEndRoute() {
        return 'this is the end';
    }
}
