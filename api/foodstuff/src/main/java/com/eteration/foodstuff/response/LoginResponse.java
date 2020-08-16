package com.eteration.foodstuff.response;

import com.eteration.foodstuff.dto.TokenDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private TokenDto tokenDto;
}
