# Auth with Express assignment Documentation

Welcome to my 'Auth with Express' assignment. I've built a dummy instagram login system using HTML, CSS, JS, Node.js, Express.js with MongoDB.

## Endpoints

- **/register** - User can create account at this endpoint by providing `email`, `password`, `username` and `bio`.

- **/login** - User can log into the account he/she has created by providing credentials (email and password).

- **/** - User will be redirected to the following endpoint, to see the profile detail after logging in.

**Request Body while creating an account:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "username": "user",
  "bio": "Bio"
}
```

**Response when account is created:**

```json
{
  "success": true,
  "msg": "User registered successfully"
}
```

**Request Body while loggin into the account:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yzg4MjVhNDliYmIzM2NjYmFiM2EyYyIsInVzZXJuYW1lIjoidmFpYmhhdiIsImlhdCI6MTY5MDg2MzQ5MCwiZXhwIjoxNjkwOTQ5ODkwfQ.GNoZoyDAD_6PSZEd72ltnDwVnJvcAMGAwEzl_jA"
}
```

## To get started

- Copy code to your local directory
- Install the node modules
- Create a '.env' file and add credentials 'MONGO_URI' and 'JWT_SECRET'
- Run `npm start` command to start the application
- And you're good to go.
