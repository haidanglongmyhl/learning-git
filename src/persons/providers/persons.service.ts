import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../person.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from '../dtos/create-person.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  ) {}
  public async createPerson(createPersonDto: CreatePersonDto) {
    let newPerson = this.personsRepository.create(createPersonDto);
    newPerson = await this.personsRepository.save(newPerson);
    return newPerson;
  }
}
