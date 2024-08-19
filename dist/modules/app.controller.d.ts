import { Request, Response } from 'express';
import { AppService } from './app.service';
import { SupabaseClient } from '@supabase/supabase-js';
export declare class AppController {
    private readonly appService;
    private readonly supabase;
    constructor(appService: AppService, supabase: SupabaseClient);
    getHello(): Promise<any>;
    kakaoLogin(req: Request): Promise<any>;
    callback(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
