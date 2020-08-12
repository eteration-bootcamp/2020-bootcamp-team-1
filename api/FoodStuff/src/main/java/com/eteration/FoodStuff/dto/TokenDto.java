package com.eteration.FoodStuff.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenDto {
    private String username;
    private String token;
}