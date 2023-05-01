package com.ssafy.Article.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(value = "test api", tags = {"test, "})
public class TestController {

    @GetMapping("/test")
    public String getHello() {
        return "Hello world";
    }

}
