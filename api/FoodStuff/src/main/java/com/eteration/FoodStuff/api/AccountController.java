package com.eteration.FoodStuff.api;

import com.eteration.FoodStuff.dto.TokenDto;
import com.eteration.FoodStuff.model.User;
import com.eteration.FoodStuff.repository.UserRepository;
import com.eteration.FoodStuff.request.LoginRequest;
import com.eteration.FoodStuff.request.RegistrationRequest;
import com.eteration.FoodStuff.response.LoginResponse;
import com.eteration.FoodStuff.response.RegistrationResponse;
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
@RequestMapping("/api/account/")
public class AccountController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserRepository userRepository;
    private final UserServiceImpl userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) throws AuthenticationException {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.getLoginDto().getUsername(), req.getLoginDto().getPassword()));
        final User user = userRepository.findByUsername(req.getLoginDto().getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        final long id = user.getId();
        return ResponseEntity.ok(new LoginResponse(new TokenDto(id,user.getUsername(), token)));
    }
    @RequestMapping(value = "register", method = RequestMethod.POST)
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest req) throws AuthenticationException {
        return ResponseEntity.ok(userService.register(req.getRegistrationDto()));
    }
}