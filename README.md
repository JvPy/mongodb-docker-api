# Using mongodb on docker with express and typescript

This project holds a sample of an application that runs on `express` and `typescript` with a `mongodb` instance in a `docker` container

# How to run
1. Make sure docker and npm are installed
2. copy .env.example to .env file and add the desired values
3. run `npm i`
4. run `npm run docker:up`
5. run `npm run dev`

At this point you should be able to hit the api using `postman`, `insomina` or `curl`

# Endpoints 

#### POST /user
This endpoint will add an user (if it not already exists) to the mongodb instance

It expects an object of type 
```
{
    "email": "your@email",
    "name": "yourName",
    "age": 1
}
```

cUrl: `curl --request POST \
  --url http://localhost:3000/user \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "joao",
	"email": "joao@victor.com",
	"age": 29
}'`

#### GET /users
This endpoint will list all users 

cUrl: `curl --request GET \
  --url http://localhost:3000/users \
  --header 'Content-Type: application/json'`


