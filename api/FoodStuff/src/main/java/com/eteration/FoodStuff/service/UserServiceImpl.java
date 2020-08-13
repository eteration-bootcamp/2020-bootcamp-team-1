package com.eteration.FoodStuff.service;

import com.eteration.FoodStuff.dto.RegistrationDto;
import com.eteration.FoodStuff.dto.RegistrationResultDto;
import com.eteration.FoodStuff.dto.UserDto;
import com.eteration.FoodStuff.mapper.UserMapper;
import com.eteration.FoodStuff.model.User;
import com.eteration.FoodStuff.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public UserDto addUser(UserDto userDto) {
        return userMapper.toUserDto(userRepository.save(userMapper.toUser(userDto)));
    }

    @Override
    public UserDto getUser(long userId) {
        return userMapper
                .toUserDto(userRepository
                        .findById(userId)
                        .orElseThrow(() -> new IllegalArgumentException("User : " + userId + "does not exist !")));
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

    public RegistrationResultDto register(RegistrationDto registrationDTO) {
        try {
            if (true){
                User user = new User();
                user.setEmail(registrationDTO.getEmail());
                user.setUsername(registrationDTO.getUsername());
                user.setPassword(bCryptPasswordEncoder.encode(registrationDTO.getPassword()));
                userRepository.save(user);
                return new RegistrationResultDto("succes", true);
            }else{
                return new RegistrationResultDto("unsucces this record is available ", false);
            }
        } catch (Exception e) {

            return new RegistrationResultDto("unsucces", false);
        }
    }

    @Override
    public List<UserDto> getUsers() {
        return userMapper.toUserDtoList(userRepository.findAll());
    }
}
