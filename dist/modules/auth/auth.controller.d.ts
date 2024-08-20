import { Request, Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    kakaoLogin(req: Request): Promise<void>;
    callback(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    leaveApp(req: Request): Promise<any>;
}
