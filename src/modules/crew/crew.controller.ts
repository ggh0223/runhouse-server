import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
} from '@nestjs/common';

@Controller('crew')
export class CrewController {
  @Get()
  findAll() {
    return 'CrewController';
  }
}
