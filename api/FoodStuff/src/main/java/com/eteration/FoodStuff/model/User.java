package com.eteration.FoodStuff.model;

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
public class User extends BaseEntity {
    @Column
    private String username;

    @Column
    private String email;
    @Column
    private String password;

    @Column
    private String about;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = Recipe.class, mappedBy = "user")
    public List<Recipe> recipes = new ArrayList<>();
}