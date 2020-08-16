package com.eteration.foodstuff.mapper;

import com.eteration.foodstuff.dto.UserDto;
import com.eteration.foodstuff.model.User;
import org.mapstruct.*;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Named("toUser")
    User toUser(UserDto userDto);

    @Named("toUserDto")
    UserDto toUserDto(User user);

    @IterableMapping(qualifiedByName = "toUser")
    List<User> toUserList(List<UserDto> userDtos);

    @IterableMapping(qualifiedByName = "toUserDto")
    List<UserDto> toUserDtoList(List<User> users);
}