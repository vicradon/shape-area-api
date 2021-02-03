# Shape Area API

This is an API for calculating the area of various plane shapes.

## Live version

Explore a live version of the API [here]()

## Documentation

A well documented, OpenAPI spec documentation can be found [here]()

## Prerequisites

1. NodeJS - A Version 10 or higher local installation of NodeJS
2. PostgreSQL - A local PostgreSQL DBMS of version 9 or higher

## Installation

1. Clone the repo

```
git clone https://github.com/vicradon/shape-area-api.git
```

2. Install dependencies

```
npm i
```

3. Create an environment file from the example

```
cp .env.example .env
```

4. Add the PORT and JWT_SECRET environment variables

```
PORT=3000
JWT_SECRET="some long super secret value"
```

5. Start the development server

```
npm run dev
```

## Running Tests

Run the tests using

```
npm test
```

## LICENCE

MIT
