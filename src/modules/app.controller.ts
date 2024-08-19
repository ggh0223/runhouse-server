import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { AppService } from './app.service';
import { Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SUPABASE') private readonly supabase: SupabaseClient,
  ) {}

  @Get()
  async getHello() {
    const { data, error } = await this.supabase
      .from('user')
      .select('*')
      .single();
    console.log(data, error);
    return data;
  }

  @Get('kakao')
  @UseGuards(AuthGuard('kakao')) // kakao.strategy를 실행시켜 줍니다.
  async kakaoLogin(@Req() req: Request) {
    console.log('kakaoLogin');
    return req['user'];
  }

  @Get('oauth')
  @UseGuards(AuthGuard('kakao'))
  async callback(@Req() req: Request, @Res() res: Response) {
    console.log('callback');
    console.log(req['user']);
    return res.send('callback');
  }
}
