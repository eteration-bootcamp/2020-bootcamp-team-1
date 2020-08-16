package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {
    UserDto addUser(UserDto userDto);
    UserDto getUser(long userId);
    UserDto getByUserName(String username);
    UserDto updateUser(UserDto userDto);
    List<UserDto> getUsers();
}
