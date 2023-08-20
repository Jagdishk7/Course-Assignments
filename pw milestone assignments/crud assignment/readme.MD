# Backend Application Documentation

Welcome to the documentation for our backend CRUD application! This document provides information on how to use the API endpoints, create an account, and authenticate users using JSON Web Tokens (JWT).

## Authentication

When user creates an account, app checks if user already exists with the email or not. On loggin in, it returns the token corresponding to the credentials.

## Endpoints

- **/api/register** - User can create account at this endpoint by providing `email` and `password`.

- **/api/login** - User can log into the account he/she has created by providing credentials (email and password).

**Description:** This endpoint allows users to create an account using their email and password.

**Request Body while creating an account:**

``````json
{
  "email": "user@example.com",
  "password": "yourpassword"
}


**Response when account is created:**

````json
{
  "msg": "User registered successfully"
}


**Request Body while loggin into the account:**

`````json
{
  "email": "user@example.com",
  "password": "yourpassword"
}


**Response when account is created:**

````json
{
  "msg": "User logged in successfully",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGJmYWJkMjJkMGQzODYxNTIzYjNlNmMiLCJ1c2VyRW1haWwiOiJha2FzaEBnbWFpbC5jb20iLCJpYXQiOjE2OTAyODMwMjgsImV4cCI6MTY5Mjg3NTAyOH0.z86CEgcmwJ2PVYJEw1SFPLBmCGDv8KqD6SO9uhc23U"
}


``````
