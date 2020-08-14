package com.eteration.FoodStuff.request;

import com.eteration.FoodStuff.dto.RegistrationDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequest {
    private RegistrationDto registrationDto;
}
