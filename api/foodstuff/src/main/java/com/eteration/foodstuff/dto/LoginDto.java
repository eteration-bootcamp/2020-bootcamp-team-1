package com.eteration.foodstuff.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDto {
    private String username;
    private String password;
}