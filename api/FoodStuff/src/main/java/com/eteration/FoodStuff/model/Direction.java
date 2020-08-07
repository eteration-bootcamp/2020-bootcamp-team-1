package com.eteration.FoodStuff.model;

import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Direction extends BaseEntity {
    @Column
    private byte stepNumber;
    @Column
    private String description;
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY ,targetEntity = Recipe.class)
    @JoinColumn
    private Recipe recipe;
}
