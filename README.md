# radium

## User Apis

### POST /users

- Register a user 
- The details of a user are name(mandatory and unqiue), mobile(mandatory), email(mandatory), password(mandatory) and a isDeleted flag with a default false value

### POST /login

- Validate credentials of the user. The credentials of a user are their name and their password. You will receive these in the request body. The credentials are valid if there exists a user with the combination of credentials. Return a true status in response body. You also have to ensure the user is valid (not deleted) 


### GET /users/:userId
- return the user's details if found else return a response with an error message having a structure like [this](#error-response-structure) 
- + Add an additional check to ensure that api is requesting the details of the logged-in user only. ( Hint : You have to compare the userId in the token with the userId in the path parameter )

### PUT /users/:userId

- Update a user's email recieved in the request body. Before actually updating the details ensure that the userId recieved is valid which means a valid user with this id must exist, else return a response with an error message with a structure like [this](#error-response-structure) 
- + Add an additional check to ensure that api is requesting the details of the logged-in user only. ( Hint : You have to compare the userId in the token with the userId in the path parameter )

### Successful Response structure
```yaml
{
  status: true,
  data: {

  }
}
```
### Error Response structure
```yaml
{
  status: false,
  msg: ""
}
```

## Collections
### Users
```yaml
{
    "name" : "Sabiha",
    "mobile" : 9999999999,
    "email" : "s@gmail.com",
    "password" : "123",
    "isDeleted" : false,
}
```


