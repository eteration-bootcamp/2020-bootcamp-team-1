package com.eteration.FoodStuff.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto  extends  BaseDto {
    private String username;
    private String email;
    private String password;
    private String about;
}
