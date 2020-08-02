package com.kubilaycicek.todoApp.api;

import com.kubilaycicek.todoApp.dto.TodoDto;
import com.kubilaycicek.todoApp.service.TodoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("todo-api")
@RequiredArgsConstructor
@Api(value = "Todo Rest Controller", description = "APIs that making operations about the todos")
public class TodoRestController {
    private final TodoService todoService;

    @ApiOperation(value = "Add todo operation", response = TodoDto.class)
    @PostMapping("/")
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto) {
        return ResponseEntity.ok(todoService.addTodo(todoDto));
    }

    @ApiOperation(value = "Update todo operation", response = TodoDto.class)
    @PutMapping("/")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto) {
        return ResponseEntity.ok(todoService.updateTodo(todoDto));
    }

    @ApiOperation(value = "Returns all todo")
    @GetMapping("/list")
    public ResponseEntity<List<TodoDto>> findAll() {
        return ResponseEntity.ok(todoService.getAll());
    }

    @ApiOperation(value = "Returns todo by id", response = TodoDto.class)
    @GetMapping("/todo/{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable(name = "id", required = true) long id) {
        return ResponseEntity.ok(todoService.getById(id));
    }

    @ApiOperation(value = "Delete todo by id", response = Boolean.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity removeById(@PathVariable(name = "id", required = true) long id) {
        if (todoService.removeById(id))
            return new ResponseEntity<>(HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}