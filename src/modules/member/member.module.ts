import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([]), // add this
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
