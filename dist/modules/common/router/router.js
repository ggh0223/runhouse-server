"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const app_module_1 = require("../../app.module");
const attendance_module_1 = require("../../attendance/attendance.module");
const auth_module_1 = require("../../auth/auth.module");
const crew_module_1 = require("../../crew/crew.module");
const member_module_1 = require("../../member/member.module");
const schedule_module_1 = require("../../schedule/schedule.module");
exports.Routers = [
    {
        path: '/api',
        module: app_module_1.AppModule,
        children: [
            {
                path: '/',
                module: auth_module_1.AuthModule,
            },
            {
                path: '/',
                module: attendance_module_1.AttendanceModule,
            },
            {
                path: '/',
                module: crew_module_1.CrewModule,
            },
            {
                path: '/',
                module: member_module_1.MemberModule,
            },
            {
                path: '/',
                module: schedule_module_1.ScheduleModule,
            },
        ],
    },
];
//# sourceMappingURL=router.js.map