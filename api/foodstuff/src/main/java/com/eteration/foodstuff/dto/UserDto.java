package com.eteration.foodstuff.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@EqualsAndHashCode(callSuper=false)
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties("password")
public class UserDto  extends  BaseDto {
    private String username;
    private String email;
    private String password;
    private String about;
}