import { SupabaseClient } from '@supabase/supabase-js';
export declare class AuthService {
    private readonly supabase;
    constructor(supabase: SupabaseClient);
    findUsers(): Promise<any>;
    findUserBySocialId(social_id: string): Promise<any>;
}
