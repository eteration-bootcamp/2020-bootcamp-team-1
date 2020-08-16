package com.eteration.foodstuff.request;

import com.eteration.foodstuff.dto.RegistrationDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequest {
    private RegistrationDto registrationDto;
}
