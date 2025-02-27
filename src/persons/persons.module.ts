import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './providers/persons.service';

@Module({
  controllers: [PersonsController],
  providers: [PersonsService]
})
export class PersonsModule {}
