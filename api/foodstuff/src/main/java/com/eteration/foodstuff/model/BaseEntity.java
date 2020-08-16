package com.eteration.foodstuff.model;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@MappedSuperclass
@AllArgsConstructor
public abstract class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
}