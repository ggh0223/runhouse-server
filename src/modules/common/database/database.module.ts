import { Module, Global } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import entities from 'src/modules/common/database/database.entity';
import { createClient } from '@supabase/supabase-js';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'SUPABASE',
      useFactory: (configService: ConfigService) => {
        return createClient(
          configService.get<string>('SUPABASE_URL'),
          configService.get<string>('SUPABASE_KEY'),
        );
      },
      inject: [ConfigService],
    },
  ],
  exports: ['SUPABASE'],
})
export class DatabaseModule {}
