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
public class Ingredient  extends BaseEntity{
    @Lob
    @Column(nullable = true)
    private String name;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY ,targetEntity = Recipe.class)
    private Recipe recipe;
}