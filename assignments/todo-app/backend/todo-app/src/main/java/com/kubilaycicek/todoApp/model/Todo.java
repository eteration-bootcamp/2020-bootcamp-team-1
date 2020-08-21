package com.kubilaycicek.todoApp.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "todos")
public class Todo extends BaseEntity {
    @Column(name = "title")
    private String title;
    @Column(name = "isChecked")
    private boolean isChecked;

}
