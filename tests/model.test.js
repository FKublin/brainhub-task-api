const Event = require('../src/models/event.model')

test('Email is validated', async () => {
    const event = new Event({
        firstName: 'John',
        lastName: 'Doe',
        eventDate: new Date('2022-02-2'),
        email: 'not a valid email'
    })

    const error = event.validateSync()

    expect(error.errors['email'].message).toEqual('not a valid email is not a valid email')
})