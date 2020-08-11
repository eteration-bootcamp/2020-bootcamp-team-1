package com.eteration.FoodStuff.service;

import com.eteration.FoodStuff.dto.UserDto;
import com.eteration.FoodStuff.mapper.UserMapper;
import com.eteration.FoodStuff.model.User;
import com.eteration.FoodStuff.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public UserDto addUser(UserDto userDto) {
        return userMapper.toUserDto(userRepository.save(userMapper.toUser(userDto)));
    }

    @Override
    public UserDto getUser(long userId) {
        User userDb = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User : " + userId + "does not exist !"));
        return userMapper.toUserDto(userDb);
    }

    @Override
    public UserDto updateUser(UserDto userDto) {
        User userDb = userRepository.findById(userDto.getId())
                .orElseThrow(() -> new IllegalArgumentException("User : " + userDto.getId() + "does not exist !"));
        userDb.setEmail(userDto.getEmail());
        userDb.setAbout(userDto.getAbout());
        userDb.setUsername(userDto.getUsername());
        userDb.setPassword(userDb.getPassword());

        return userMapper.toUserDto(userRepository.save(userDb));
    }

    @Override
    public List<UserDto> getUsers() {
        return userMapper.toUserDtoList(userRepository.findAll());
    }
}
