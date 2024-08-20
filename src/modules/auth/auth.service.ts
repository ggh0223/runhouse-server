import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(@Inject('SUPABASE') private readonly supabase: SupabaseClient) {}

  async findUsers() {
    const { data, error } = await this.supabase
      .from('user')
      .select('*')
      .single();
    return data;
  }

  async findUserBySocialId(social_id: string) {
    const { data, error } = await this.supabase
      .from('user')
      .select('*')
      .eq('social_id', social_id)
      .single();
    return data;
  }
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
