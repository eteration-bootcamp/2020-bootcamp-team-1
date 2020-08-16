package com.eteration.foodstuff.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Direction extends BaseEntity {
    @Column(nullable = true)
    private byte stepNumber;
    @Lob
    @Column(nullable = true)
    private String description;
    @ManyToOne(cascade = CascadeType.ALL,targetEntity = Recipe.class)
    private Recipe recipe;
}