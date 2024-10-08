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
exports.KakaoStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
let KakaoStrategy = class KakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, 'kakao') {
    constructor(configService) {
        super({
            clientID: configService.get('KAKAO_CLIENT_ID'),
            clientSecret: configService.get('KAKAO_CLIENT_SECRET'),
            callbackURL: `${configService.get('DOMAIN')}/api/auth/callback/kakao`,
            scope: 'profile_nickname profile_image account_email',
        });
        this.configService = configService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        try {
            const { _json, username } = profile;
            const user = {
                social_id: _json.id,
                name: username,
                email: _json.kakao_account.email,
                profile_image: _json.properties.profile_image,
                thumbnail_image: _json.properties.thumbnail_image,
            };
            done(null, user);
        }
        catch (error) {
            done(error);
        }
    }
};
exports.KakaoStrategy = KakaoStrategy;
exports.KakaoStrategy = KakaoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], KakaoStrategy);
//# sourceMappingURL=kakao.strategy.js.map