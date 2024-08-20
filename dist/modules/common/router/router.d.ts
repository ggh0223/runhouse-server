import { AppModule } from 'src/modules/app.module';
import { AuthModule } from 'src/modules/auth/auth.module';
export declare const Routers: {
    path: string;
    module: typeof AppModule;
    children: {
        path: string;
        module: typeof AuthModule;
    }[];
}[];
