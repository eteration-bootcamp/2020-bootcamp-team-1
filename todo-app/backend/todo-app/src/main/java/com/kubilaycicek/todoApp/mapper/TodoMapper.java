package com.kubilaycicek.todoApp.mapper;

import com.kubilaycicek.todoApp.dto.TodoDto;
import com.kubilaycicek.todoApp.model.Todo;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TodoMapper {
    @Named("toTodo")
    Todo toTodo(TodoDto todoDto);

    @Named("toTodoDto")
    TodoDto toTodoDto(Todo todo);

    @IterableMapping(qualifiedByName = "toTodo")
    List<Todo> toTodoList(List<TodoDto> todoDtoList);

    @IterableMapping(qualifiedByName = "toTodoDto")
    List<TodoDto> toTodoDtoList(List<Todo> todoList);

}
