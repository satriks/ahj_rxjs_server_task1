const { ru, Faker } = require('@faker-js/faker')

const faker = new Faker({ locale: [ru] })

function createRandomUser () {
  const subject = faker.helpers.fake('{{person.lastName()}}. Вопрос про {{location.streetAddress()}}')
  const body = faker.helpers.fake('По этому адресу находится : {{company.name()}} у них случилось {{string.alpha(from=1, to=10)}}')

  return {
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject,
    body,
    received: faker.date.between({ from: (Date.now() - 1000 * 60 * 60 * 12), to: (Date.now()) }).getTime()
  }
}

module.exports = createRandomUser
