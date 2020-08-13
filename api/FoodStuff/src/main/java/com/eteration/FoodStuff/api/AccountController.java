package com.eteration.FoodStuff.api;

import com.eteration.FoodStuff.dto.LoginDto;
import com.eteration.FoodStuff.dto.RegistrationDto;
import com.eteration.FoodStuff.dto.RegistrationResultDto;
import com.eteration.FoodStuff.dto.TokenDto;
import com.eteration.FoodStuff.model.User;
import com.eteration.FoodStuff.repository.UserRepository;
import com.eteration.FoodStuff.security.JwtTokenUtil;
import com.eteration.FoodStuff.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/token")
public class AccountController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserRepository userRepository;
    private final UserServiceImpl userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<TokenDto> login(@RequestBody LoginDto request) throws AuthenticationException {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        final User user = userRepository.findByUsername(request.getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        final long id = user.getId();

        return ResponseEntity.ok(new TokenDto(id,user.getUsername(), token));
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<RegistrationResultDto> register(@RequestBody RegistrationDto registrationDto) throws AuthenticationException {
        return ResponseEntity.ok(userService.register(registrationDto));
    }
}