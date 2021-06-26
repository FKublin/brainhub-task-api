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

test('First name is required', async () => {
    const event = new Event({
        firstName: '',
        lastName: 'Doe',
        eventDate: new Date('2022-02-2'),
        email: 'john-doe@gmail.com'
    })

    const error = event.validateSync()

    expect(error.errors['firstName'].message).toEqual('First name is required')
})

test('Last name is required', async () => {
    const event = new Event({
        firstName: 'John',
        lastName: '',
        eventDate: new Date('2022-02-2'),
        email: 'john-doe@gmail.com'
    })

    const error = event.validateSync()

    expect(error.errors['lastName'].message).toEqual('Last name is required')
})

test('Date is required', async () => {
    const event = new Event({
        firstName: 'John',
        lastName: 'Doe',
        eventDate: '',
        email: 'john-doe@gmail.com'
    })

    const error = event.validateSync()

    expect(error.errors['eventDate'].message).toEqual("Valid date is required")
})

test('Event date is validated', async () => {
    const event = new Event({
        firstName: 'John',
        lastName: 'Doe',
        eventDate: 'this is not a valid date',
        email: 'john-doe@gmail.com'
    })

    const error = event.validateSync()

    expect(error.errors['eventDate'].message).toEqual("Cast to date failed for value \"this is not a valid date\" (type string) at path \"eventDate\"")
})