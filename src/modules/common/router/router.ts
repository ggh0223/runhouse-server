import { AppModule } from 'src/modules/app.module';
import { AttendanceModule } from 'src/modules/attendance/attendance.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { CrewModule } from 'src/modules/crew/crew.module';
import { MemberModule } from 'src/modules/member/member.module';
import { ScheduleModule } from 'src/modules/schedule/schedule.module';

export const Routers = [
  {
    path: '/api',
    module: AppModule,
    children: [
      {
        path: '/',
        module: AuthModule,
      },
      {
        path: '/',
        module: AttendanceModule,
      },
      {
        path: '/',
        module: CrewModule,
      },
      {
        path: '/',
        module: MemberModule,
      },
      {
        path: '/',
        module: ScheduleModule,
      },
    ],
  },
];
