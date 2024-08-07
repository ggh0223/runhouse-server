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

@Controller('schedule')
export class ScheduleController {
  @Get()
  findAll() {
    return 'ScheduleController';
  }
}
