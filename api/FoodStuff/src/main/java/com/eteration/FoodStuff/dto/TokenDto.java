package com.eteration.FoodStuff.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenDto {
    private long id;
    private String username;
    private String token;
}