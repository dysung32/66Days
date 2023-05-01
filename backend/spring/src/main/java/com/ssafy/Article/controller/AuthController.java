package com.ssafy.Article.controller;

import com.ssafy.Article.model.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "인증 API", tags = {"Auth, "})
@EnableWebSecurity
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Value("${jwt.expiration.atk}")
    Integer atkExpirationTime;

    @Value("${jwt.expiration.rtk}")
    Integer rtkExpirationTime;

    @Autowired
    UserService userService;
    @Autowired
    AuthService authService;
    @Autowired
    KakaoService kakaoService;



}
