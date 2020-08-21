package com.kubilaycicek.todoApp.service;

import com.kubilaycicek.todoApp.dto.TodoDto;
import com.kubilaycicek.todoApp.mapper.TodoMapper;
import com.kubilaycicek.todoApp.model.Todo;
import com.kubilaycicek.todoApp.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;
    private final TodoMapper todoMapper;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        return todoMapper.toTodoDto(todoRepository.save(todoMapper.toTodo(todoDto)));
    }

    @Override
    public TodoDto updateTodo(TodoDto todoDto) {

        Todo todoDb = todoRepository.findById(todoDto.getId())
                .orElseThrow(() -> new IllegalArgumentException("Todo" + todoDto.getId() + "does not exist !"));
        //todoDb.setTitle(todoDto.getTitle());
        todoDb.setChecked(todoDto.isChecked());

        return todoMapper.toTodoDto(todoRepository.save(todoDb));
    }

    @Override
    public TodoDto getById(long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Todo" + id + "does not exist !"));
        return todoMapper.toTodoDto(todo);
    }

    @Override
    public boolean removeById(long id) {
        try {
            Todo todoDb = todoRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Todo" + id + "does not exist !"));
            todoRepository.delete(todoDb);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<TodoDto> getAll() {
        return todoMapper.toTodoDtoList(todoRepository.findAll());
    }
}