package com.eteration.FoodStuff.response;

import com.eteration.FoodStuff.dto.UserDto;
import lombok.Data;
import java.util.List;

@Data
public class UserListResponse {
    private List<UserDto> userDtoList;
}
