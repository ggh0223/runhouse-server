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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let AuthService = class AuthService {
    constructor(supabase) {
        this.supabase = supabase;
    }
    async findUsers() {
        const { data, error } = await this.supabase
            .from('user')
            .select('*')
            .single();
        return data;
    }
    async findUserBySocialId(social_id) {
        const { data, error } = await this.supabase
            .from('user')
            .select('*')
            .eq('social_id', social_id)
            .single();
        return data;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SUPABASE')),
    __metadata("design:paramtypes", [supabase_js_1.SupabaseClient])
], AuthService);
//# sourceMappingURL=auth.service.js.map