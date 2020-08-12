package com.eteration.FoodStuff.api;

import com.eteration.FoodStuff.request.UserRequest;
import com.eteration.FoodStuff.response.UserListResponse;
import com.eteration.FoodStuff.response.UserResponse;
import com.eteration.FoodStuff.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("api/users/")
@Api(value = "api/users/", description = "User APIs")
public class UserController {

    private final UserService userService;

    @GetMapping("{id}")
    @ApiOperation(value = "Get By Id Operation")
    public ResponseEntity<UserResponse> getUser(@PathVariable(name = "id") long id) {
        try {
            UserResponse res = new UserResponse();
            res.setUserDto(userService.getUser(id));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("list")
    @ApiOperation(value = "Get All User List  Operation")
    public ResponseEntity<UserListResponse> getUsers() {
        try {
            UserListResponse res = new UserListResponse();
            res.setUserDtoList(userService.getUsers());
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
    }

    @PostMapping
    @ApiOperation(value = "Create User Operation")
    public ResponseEntity<UserResponse> addUser(@RequestBody UserRequest req) {
        try {
            UserResponse res = new UserResponse();
            System.out.println(req.getUserDto().toString());
            res.setUserDto(userService.addUser(req.getUserDto()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping
    @ApiOperation(value = "Update User Operation")
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest req) {
        try {
            UserResponse res = new UserResponse();
            System.out.println(req.getUserDto().toString());
            res.setUserDto(userService.updateUser(req.getUserDto()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}