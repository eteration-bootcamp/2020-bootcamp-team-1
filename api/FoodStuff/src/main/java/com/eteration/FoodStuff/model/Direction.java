package com.eteration.FoodStuff.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties("recipe")
public class Direction extends BaseEntity {
    @Column
    private byte stepNumber;
    @Lob
    @Column
    private String description;

    @ManyToOne(cascade = CascadeType.ALL,targetEntity = Recipe.class)
    private Recipe recipe;
}