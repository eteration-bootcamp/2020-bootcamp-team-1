# TodoList Application


## Backend
### Used Technologies
* Java 11
* Spring Boot
* Maven
* JPA / Hibernate
* Mapstruct
* Project Lombok
* Swagger UI
* H2 Database

### Swagger
http://localhost:8080/swagger-ui.html

### Database Configuration (application.properties)
```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

```json
{
   "id": 1,
   "title": "Gym",
   "checked": false
}
```
### API
| Route  | HTTP Verb  |POST Body   |Description   |
|---|---|---|---|
| http://localhost:8080/todo-app/list  |`GET`   |  Empty | Get All List
| http://localhost:8080/todo-app/delete:=id |`DELETE`   |  id | Delete todo by id  
| http://localhost:8080/todo-app/ |`POST`   |  TodoDto | Create Todo
| http://localhost:8080/todo-app/ |`PUT`   |  TodoDto | Update Todo

## Front-End

This project was bootstrapped with create-react-app.

### Demo
Live functionality demo (without API & Redux) https://team1-todo.netlify.app


### Libraries :

- bootstrap
- react-bootstrap
- redux
- react-redux
- redux-saga
- axios

### Features

- Adding new todo
- Removing todo
- Seeing list of todos
- Search a todo by its text
- Mark todo as complete
- Responsive & User-Friendly & Simple Layout
