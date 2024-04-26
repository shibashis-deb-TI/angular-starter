const { faker } = require("@faker-js/faker")

module.exports = () => ({
  contacts: new Array(5).fill(null).map(() => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.number.int(10),
    address: faker.location.streetAddress(),
  })),
})
