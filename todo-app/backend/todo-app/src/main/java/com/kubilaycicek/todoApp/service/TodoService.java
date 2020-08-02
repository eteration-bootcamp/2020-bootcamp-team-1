package com.kubilaycicek.todoApp.service;

import com.kubilaycicek.todoApp.dto.TodoDto;

import java.util.List;

public interface TodoService {
    TodoDto addTodo(TodoDto todoDto);
    TodoDto updateTodo(TodoDto todoDto);
    TodoDto getById(long id);
    boolean removeById(long id);
    List<TodoDto> getAll();
}
