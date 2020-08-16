package com.eteration.foodstuff.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenDto {
    private long id;
    private String username;
    private String token;
}