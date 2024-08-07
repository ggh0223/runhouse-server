import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrewController } from './crew.controller';
import { CrewService } from './crew.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([]), // add this
  ],
  controllers: [CrewController],
  providers: [CrewService],
})
export class CrewModule {}
