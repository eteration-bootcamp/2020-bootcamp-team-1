package com.eteration.foodstuff.model;

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
    @Column(nullable = true)
    private String title;

    @Lob
    @Column(nullable = true)
    private String description;

    @Column(nullable = true)
    private String prepTime;

    @Column(nullable = true)
    private String serving;

    @Lob
    @Column(nullable = true)
    private String chefTips;

    @Column(nullable = true)
    private String image;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL, targetEntity = Ingredient.class)
    @JoinColumn(name="recipe_id", referencedColumnName="id")
    public List<Ingredient> ingredients = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, targetEntity = Direction.class)
    @JoinColumn(name="recipe_id", referencedColumnName="id")
    public List<Direction> directions = new ArrayList<>();
}