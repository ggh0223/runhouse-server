import { AppService } from './app.service';
export declare const supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<any>;
}
