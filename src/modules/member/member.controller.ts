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

@Controller('member')
export class MemberController {
  @Get()
  findAll() {
    return 'MemberController';
  }
}
