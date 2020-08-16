package com.eteration.foodstuff.response;

import com.eteration.foodstuff.dto.UserDto;
import lombok.Data;
import java.util.List;

@Data
public class UserListResponse {
    private List<UserDto> userDtoList;
}
