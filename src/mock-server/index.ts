import { createServer, Model, Factory } from 'miragejs';
import { faker } from '@faker-js/faker';
import { Person, VacationPeriod } from '../fetchers/fetchers';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    factories: {
      person: Factory.extend<Partial<Person>>({
        firstName() {
          return faker.name.firstName();
        },
        lastName() {
          return faker.name.lastName();
        },
        streetAddress() {
          return faker.address.streetAddress();
        },
        cityStateZip: faker.helpers.fake(
          '{{address.city}}, {{address.stateAbbr}} {{address.zipCode}}',
        ),
        phone: faker.phone.number('(##) 9##-###-###'),
        name() {
          return faker.name.fullName({
            firstName: this.firstName as string,
            lastName: this.lastName as string,
          });
        },
        username() {
          return faker.internet.userName(
            this.firstName as string,
            this.lastName as string,
          );
        },
        password() {
          return faker.internet.password();
        },
        email() {
          return faker.internet.email(
            this.firstName as string,
            this.lastName as string,
          );
        },
      }),

      vacationPeriod: Factory.extend<Partial<VacationPeriod>>({
        startDate() {
          return faker.date.future().toDateString();
        },
        endDate() {
          return faker.date.future(1, this.startDate as string).toDateString();
        },
      }),
    },

    models: {
      person: Model.extend<Partial<Person>>({}),
      vacationPeriod: Model.extend<Partial<VacationPeriod>>({}),
    },

    routes() {
      this.namespace = 'api';

      this.get('people');
      this.get('vacation-period');
    },

    seeds(server) {
      server.createList('person', 20);
      server.createList('vacationPeriod', 5);
    },
  });
}
