import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrewService {
  constructor() {}
  // create(createTmDto: CreateTmDto) {
  //     return 'This action adds a new tm';
  // }

  // async findAll() {
  //     const data = await this.TMRepository.find();
  //     return data;
  // }

  // findOne(Mnemonic: string) {
  //     return `This action returns a #${Mnemonic} tm`;
  // }

  // update(id: number, updateTmDto: UpdateTmDto) {
  //     return `This action updates a #${id} tm`;
  // }

  // remove(id: number) {
  //     return `This action removes a #${id} tm`;
  // }
}
