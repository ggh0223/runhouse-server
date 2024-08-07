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

@Controller('attendance')
export class AttendanceController {
  @Get()
  findAll() {
    return 'AttendanceController';
  }
}
