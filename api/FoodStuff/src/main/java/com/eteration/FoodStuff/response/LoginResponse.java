package com.eteration.FoodStuff.response;

import com.eteration.FoodStuff.dto.TokenDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private TokenDto tokenDto;
}
