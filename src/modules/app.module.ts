import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/modules/common/database/database.entity';

import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { CrewModule } from './crew/crew.module';
import { ScheduleModule } from './schedule/schedule.module';
import { MemberModule } from './member/member.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature(entities),
    AuthModule,
    CrewModule,
    ScheduleModule,
    MemberModule,
    AttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
