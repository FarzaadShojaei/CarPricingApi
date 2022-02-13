import { Controller,Get,Post,Param, Body } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../messages.service';
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        
    }
    @Post()
    createMessages(@Body() body:CreateMessageDto) {
        console.log(body);
    }
    @Get('/:id')
    getMessages(@Param('id') id:string) {
        console.log(id);
    }
}
