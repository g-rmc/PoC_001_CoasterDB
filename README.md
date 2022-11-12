# CoasterDB

A API created to work with a database of Roller Coasters inspired in [rcdb](https://rcdb.com/). This API is based in NodeJS with Typescript and the database is built with PostgreSQL.

## About this project

This project is the beginning of a personal project that will work as a personal app to count and grade Roller Coasters that the user has already visited.

Besides the rcdb inspiration, this API is intended to serve as a wiki, where users will be able to contribute with the data base.

## Technologies Used

- Typescript
- PostgreSQL
- Express

## How to run

1. Clone this Repository
2. Install the dependencies

```bash
npm i
```

3. Connect to postgres
4. Create a PostgreSQL database with the desired name
5. Populate the database with dump file in this repository

```bash
psql NAME_OF_DATABASE < dump.sql
```

6. Alternatively it is possible to run the dump with external platforms as [pgAdmin](https://www.pgadmin.org/)
7. Configure the `.env` file using the `.env.example`
8. Run the server with

```
npx nodemon src/server.ts
```

## Routes

- **GET** /status

Verify server status

- **GET** /coasters

Return the list with all roller coasters in database

- **POST** /coasters

Create new roller coaster

```js
body =
{
    "rcdbLink": "https://rcdb.com/0000.htm",    //required and unique
    "coasterName": "Name of the Coaster",       //required
    "parkName": "Name of the Park",             //optional
    "length": 000,                              //optional / int (m)
    "drop": 00,                                 //optional / int (m)
    "speed": 00,                                //optional / int (km/h)
    "openingYear": "1999"                       //optional / str (YYYY)
}
```

- **PUT** /coasters/:id

Update roller coaster by its id, body equivalent to POST route

- **DELETE** /coasters/:id

Delete roller coaster by its id

- **GET** /coasters/count

Return the number of roller coasters registered in the database

- **GET** /coasters/:id

Return the object of the selected roller coaster by its id