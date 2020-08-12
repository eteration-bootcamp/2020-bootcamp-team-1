package com.eteration.FoodStuff.service;

import com.eteration.FoodStuff.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto addUser(UserDto userDto);
    UserDto getUser(long userId);
    UserDto updateUser(UserDto userDto);
    List<UserDto> getUsers();
}
