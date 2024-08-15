"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = exports.supabase = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = "https://sazfajslhnvzhpaianhl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhemZhanNsaG52emhwYWlhbmhsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzAxNTc4NSwiZXhwIjoyMDM4NTkxNzg1fQ.d49EiTyPH5pnBzQDtuklxj2g05IKN9K7IPyD-OqdbDI";
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHello() {
        const { data, error } = await exports.supabase
            .from("user")
            .select("*")
            .single();
        console.log(data, error);
        return data;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map