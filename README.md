# Event form API

## About

This is a REST API for posting and retrieving events. This API lets you:
* Post an event using your first name, last name, email adress and event date,
* Retrieve a list of all created events.


## Installation

Clone this repo using `git clone`. Navigate to it's directory, and run `npm i` to install it's dependencies. `npm start` will start the server, listening on localhost:4000.

## Usage

### Start tracking a new task

* URL: `/`
* Method: `POST`
* Body:
    * firstName: `string`
    * lastName: `string`
    * email: `string`
    * eventDate: `Date`
* Success response:
    * Code: 200
        * Content: `Event ID`
* Error response:
    * Code: 500
        * Content: `Error message`
* Sample call: 
```javascript
fetch('http://localhost:4000/events', {
      method: 'POST',
          headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           firstName: values.firstName,
           lastName: values.lastName,
           email: values.email,
           eventDate: values.eventDate
         })
})
```

### Get all events

* URL: `/events`
* Method: `GET`
* Success response:
    * Code: 200
        * Content: `[Event Object]`
* Error response:
    * Code: 500
    * Content: `Error message`
* Sample call: 
```javascript
fetch('http://localhost:4000/events', {
          method: 'GET',
          headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
})
```

### Additional notes

* Run `npm test` to conduct automated testing with Jest. 
