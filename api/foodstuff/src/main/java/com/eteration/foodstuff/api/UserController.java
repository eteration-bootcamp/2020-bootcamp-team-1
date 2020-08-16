package com.eteration.foodstuff.api;

import com.eteration.foodstuff.request.UserRequest;
import com.eteration.foodstuff.response.UserListResponse;
import com.eteration.foodstuff.response.UserResponse;
import com.eteration.foodstuff.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("api/users/")
public class UserController {
    private final UserService userService;
    @GetMapping("{id}")
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
    public ResponseEntity<UserResponse> addUser(@RequestBody UserRequest req) {
        try {
            UserResponse res = new UserResponse();
            res.setUserDto(userService.addUser(req.getUserDto()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PutMapping
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest req) {
        try {
            UserResponse res = new UserResponse();
            res.setUserDto(userService.updateUser(req.getUserDto()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}