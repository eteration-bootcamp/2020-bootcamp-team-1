package com.kubilaycicek.todoApp.repository;

import com.kubilaycicek.todoApp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Long>  {
}
