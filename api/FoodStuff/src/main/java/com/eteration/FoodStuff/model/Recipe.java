package com.eteration.FoodStuff.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor

public class Recipe extends BaseEntity {
    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String prepTime;

    @Column
    private String serving;

    @Column
    private String chefTips;

    @Column
    private String image;

    @ManyToOne
    @JoinColumn
    private User user;

    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL, targetEntity = Ingredient.class)
    @JoinColumn(name="recipe_id", referencedColumnName="id")
    public List<Ingredient> ingredients = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, targetEntity = Direction.class)
    @JoinColumn(name="recipe_id", referencedColumnName="id")
    public List<Direction> directions = new ArrayList<>();
}