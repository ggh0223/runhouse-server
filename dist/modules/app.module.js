"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const database_entity_1 = require("./common/database/database.entity");
const common_module_1 = require("./common/common.module");
const crew_module_1 = require("./crew/crew.module");
const schedule_module_1 = require("./schedule/schedule.module");
const member_module_1 = require("./member/member.module");
const attendance_module_1 = require("./attendance/attendance.module");
const kakao_strategy_1 = require("../common/auth/kakao.strategy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            typeorm_1.TypeOrmModule.forFeature(database_entity_1.default),
            crew_module_1.CrewModule,
            schedule_module_1.ScheduleModule,
            member_module_1.MemberModule,
            attendance_module_1.AttendanceModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, kakao_strategy_1.KakaoStrategy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map