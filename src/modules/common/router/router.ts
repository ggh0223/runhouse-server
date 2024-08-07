import { AppModule } from 'src/modules/app.module';
// import { UserModule } from '@src/modules/user/user.module';
// import { ConfigsModule } from '@src/modules/config/config.module';
// import { UnitModule } from '@src/modules/unit/unit.module';
// import { LabelModule } from '@src/modules/label/label.module';
// import { TcModule } from '@src/modules/tc/tc.module';
// import { TmModule } from '@src/modules/tm/tm.module';
// import { AuthModule } from '@src/modules/auth/auth.module';

export const Routers = [
    {
        path: '/api',
        module: AppModule,
        // children: [
        //     {
        //         path: '/',
        //         module: AuthModule,
        //     },
        //     {
        //         path: '/',
        //         module: TcModule,
        //     },
        //     {
        //         path: '/',
        //         module: TmModule,
        //     },
        //     {
        //         path: '/system',
        //         children: [
        //             {
        //                 path: '/',
        //                 module: LabelModule,
        //             },
        //             {
        //                 path: '/',
        //                 module: UnitModule,
        //             },
        //             {
        //                 path: '/',
        //                 module: UserModule,
        //             },
        //             {
        //                 path: '/',
        //                 module: ConfigsModule,
        //             },
        //         ],
        //     },
        // ],
    },
];
