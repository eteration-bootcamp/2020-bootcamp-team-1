# 2020 Bootcamp Team 1 - `<team-name>`

## Team Members

| Role               | Name             |
|--------------------|------------------|
| Frontend Developer | Tarık Köprülü    |
| Frontend Developer | Tolga Gölet      |
| Backend Developer  | Kubilay Çiçek    |
| Backend Developer  | Tolga Aksoy      |

## Project : Foodstuff

Foodstuff is a web app that users can share, list and see recipes or *secret formulas*.

### Main Features

- Users can create an account and login with their credentials or they can social login with their Google accounts.
- Users can list and see details of every recipe to their likings with/without an logged in account.
- Users can search specific recipes with/without an logged account. 
- Users with logged in accounts can post recipes with finite amount of ingredients and directions.
- Users with logged in accounts can see their previous posted recipes under their profiles.

### Some Side Features
...

### How to Run wtih Docker
#### Compose Build
````
   $ docker-compose build --no-cache
````
#### Compose Up
````
   $ docker-compose up
````
## ** Please check /ui folder's README for front-end documentation **

## BACKEND
### Used Technologies
* Java 8
* Spring Boot
* Spring Web
* Spring Security
* Maven
* JPA / Hibernate
* MySQL Conector
* Mapstruct
* Project Lombok
* Json Web Token

### API ENDPOINTS
#### Recipes API
| Route  | HTTP Verb  |POST Body   |Description   |
|---|---|---|---|
| http://localhost:8080/api/recipes/  |`POST`   |  RecipeDto | Create Recipe
| http://localhost:8080/api/recipes/  |`GET`   |  Empty | Get All List
| http://localhost:8080/api/recipes/{recipeId} |`DELETE`   |  id | Delete Recipe by id  
| http://localhost:8080/api/recipes/user/{userId}  |`GET`   |  userId | Get List By UserId
| http://localhost:8080/api/recipes/search/{title}  |`GET`   |  title | Search List By Title

#### Account API
| Route  | HTTP Verb  |POST Body   |Description   |
|---|---|---|---|
| http://localhost:8080/api/account/login  |`POST`   |  LoginRequest | Login
| http://localhost:8080/api/recipes/register  |`POST`   |  RegistrationRequest | Register

### API MODELS

#### Recipe Model
````
{
    "recipeDto": {
        "title": "text",
        "description": "text",
        "prepTime": "text",
        "serving": "text",
        "chefTips": "text",
        "image": "data:image/jpeg;base64,IMAGE_TEXT",
        "userDto":{
            "id":0
        },
        "ingredientsDto":[
            {
                "name":"text"
            }
        ],
        "directionsDto":[
            {
                "stepNumber":0,
                "description":"text"

            }
        ]
    }
}
````
#### Registration Model
````
{
    "registrationDto:{
        "username":"text",
        "email":"text",
        "password":"text"
    }
}
````
#### Login Model
````
{
    "loginDto": {
        "username": "text",
        "password": "text"
    }
}
````
