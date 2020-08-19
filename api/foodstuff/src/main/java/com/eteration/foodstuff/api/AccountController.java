package com.eteration.foodstuff.api;

import com.eteration.foodstuff.dto.TokenDto;
import com.eteration.foodstuff.dto.UserDto;
import com.eteration.foodstuff.model.User;
import com.eteration.foodstuff.repository.UserRepository;
import com.eteration.foodstuff.request.LoginRequest;
import com.eteration.foodstuff.request.RegistrationRequest;
import com.eteration.foodstuff.response.LoginResponse;
import com.eteration.foodstuff.response.RegistrationResponse;
import com.eteration.foodstuff.security.JwtTokenUtil;
import com.eteration.foodstuff.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/account/")
public class AccountController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserServiceImpl userService;

    @CrossOrigin
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) throws AuthenticationException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.getLoginDto().getUsername(), req.getLoginDto().getPassword()));
            final UserDto userDto = userService.getByUserName(req.getLoginDto().getUsername());
            final String token = jwtTokenUtil.generateToken(userDto);
            final long id = userDto.getId();
            return ResponseEntity.ok(new LoginResponse(new TokenDto(id, userDto.getUsername(), token)));
        } catch (Exception ex) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }
    @CrossOrigin
    @RequestMapping(value = "register", method = RequestMethod.POST)
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest req) throws AuthenticationException {
        try {
            return ResponseEntity.ok(userService.register(req.getRegistrationDto()));
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }
}