package com.kubilaycicek.todoApp.service;

import com.kubilaycicek.todoApp.dto.TodoDto;
import com.kubilaycicek.todoApp.model.Todo;
import com.kubilaycicek.todoApp.repository.TodoRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TodoServiceImplTest {

    @InjectMocks
    private TodoServiceImpl todoService;

    @Mock
    private TodoRepository todoRepository;




    @Test
    void addTodo() {
        TodoDto todoDto = new TodoDto();
        todoDto.setId(1);
        todoDto.setTitle("Test-Name");
        todoDto.setChecked(false);

        Todo todoMock = mock(Todo.class);

        lenient().when(todoMock.getId()).thenReturn(1L);
        //lenient().when(todoConverter.convertToTodo(ArgumentMatchers.any(TodoDto.class))).thenReturn(todoMock);
        lenient().when(todoRepository.save(ArgumentMatchers.any(Todo.class))).thenReturn(todoMock);
        //lenient().when(todoConverter.convertToTodoDto(ArgumentMatchers.any(Todo.class))).thenReturn(todoDto);

        TodoDto result = todoService.addTodo(todoDto);

        assertEquals(result.getTitle(), todoDto.getTitle());
        assertEquals(result.getId(), 1L);

    }

    @Test
    void updateTodo() {
    }

    @Test
    void getById() {
    }

    @Test
    void removeById() {
    }

    @Test
    void getAll() {

    }
}