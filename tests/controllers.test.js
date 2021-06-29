const controller = require('../src/controllers')
const db = require('./db')
const httpMocks = require("node-mocks-http")

beforeAll(async () => await db.connect())

afterEach(async () => await db.clearDB())

afterAll(async () => await db.close())

test('Responds with status code 200 after saving an event', async () => {
    const mockRequest = httpMocks.createRequest({
        method: 'POST',
        url: '/events',
        body: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            eventDate: new Date('2023-02-03')
        }
    })

    const mockResponse = httpMocks.createResponse()

    await controller.submitEvent(mockRequest, mockResponse)
    
    expect(mockResponse.statusCode).toEqual(200)
})

test('Responds with status code 500 after failing to save an event', async () => {
    const mockRequest = httpMocks.createRequest({
        method: 'POST',
        url: '/events',
        body: {}
    })

    const mockResponse = httpMocks.createResponse()

    await controller.submitEvent(mockRequest, mockResponse)
    
    expect(mockResponse.statusCode).toEqual(500)
})

test('Fetches created events', async () => {
    const mockPostRequest = httpMocks.createRequest({
        method: 'POST',
        url: '/events',
        body: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            eventDate: new Date('2023-02-03')
        }
    })

    const mockPostResponse = httpMocks.createResponse()

    await controller.submitEvent(mockPostRequest, mockPostResponse)

    const mockGetRequest = httpMocks.createRequest({
        method: 'GET',
        url: '/events',
    })

    const MockGetResponse = httpMocks.createResponse()

    await controller.getEvents(mockGetRequest, MockGetResponse)

    const responseBody = JSON.parse(MockGetResponse._getData())

    expect(responseBody.length).toEqual(1)
})