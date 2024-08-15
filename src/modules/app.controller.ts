import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sazfajslhnvzhpaianhl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhemZhanNsaG52emhwYWlhbmhsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzAxNTc4NSwiZXhwIjoyMDM4NTkxNzg1fQ.d49EiTyPH5pnBzQDtuklxj2g05IKN9K7IPyD-OqdbDI";

export const supabase = createClient(supabaseUrl, supabaseKey);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .single();
    console.log(data, error);
    return data;
  }
}
