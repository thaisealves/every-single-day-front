import { faker } from "@faker-js/faker";
export default function newUser() {
  const password = faker.internet.password();

  const user = {
    name: faker.lorem.words(2),
    email: faker.internet.email(),
    password,
    confirmPassword: password,
  };
  return user;
}
