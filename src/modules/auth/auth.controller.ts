import { Controller, Get, Post, UseGuards, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login/kakao')
  @UseGuards(AuthGuard('kakao')) // kakao.strategy를 실행시켜 줍니다.
  async kakaoLogin(@Req() req: Request) {}

  @Get('callback/kakao')
  @UseGuards(AuthGuard('kakao'))
  async callback(@Req() req: Request, @Res() res: Response) {
    console.log('callback');
    console.log(req['user']);
    const user = await this.authService.findUserBySocialId(
      req['user'].social_id,
    );
    return res.json(user);
  }

  @Get('leave')
  async leaveApp(@Req() req: Request) {
    console.log('leaveApp');

    return req['user'];
  }
}
