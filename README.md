# Shape Area API

This is an API for calculating the area of various plane shapes.

## Live version

Explore a live version of the API [here](https://shape-area-compute.herokuapp.com/)

## Documentation

A well documented, OpenAPI spec documentation can be found [here](https://shape-area-compute.herokuapp.com/docs)

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

4. Create the database

First, enter the postgres shell

```
psql -U postgres
```

then

```
postgres=# CREATE DATABASE shape_area_api;

# output
CREATE DATABASE
postgres=#
```

5. Set the values of the necessary environment variables

```
PORT=3000
JWT_SECRET=""
DB_USERNAME=""
DB_HOST="127.0.0.1"
DB_PASSWORD=""
DB_DATABASE="shape_area_api"
```

6. Migrate the database

```
npx sequelize db:migrate
```

7. Start the development server

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
