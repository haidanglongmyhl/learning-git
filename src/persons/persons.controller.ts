import { Body, Controller, Post } from '@nestjs/common';
import { PersonsService } from './providers/persons.service';
import { CreatePersonDto } from './dtos/create-person.dto';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personService: PersonsService) {}
  @Post('create')
  public async createProduct(@Body() createPersonDto: CreatePersonDto) {
    return await this.personService.createPerson(createPersonDto);
  }
}
