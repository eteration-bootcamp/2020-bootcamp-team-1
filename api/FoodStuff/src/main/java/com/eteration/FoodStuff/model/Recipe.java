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

    @JsonIgnoreProperties("recipe")
    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL, targetEntity = Ingredient.class, mappedBy = "recipe")
    public List<Ingredient> ingredients = new ArrayList<>();

    @JsonIgnoreProperties("recipe")
    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL, targetEntity = Direction.class, mappedBy = "recipe")
    public List<Direction> directions = new ArrayList<>();
}