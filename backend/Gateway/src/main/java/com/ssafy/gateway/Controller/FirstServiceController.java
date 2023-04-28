package com.ssafy.gateway.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kakao_oauth")
public class FirstServiceController {
    @Value("${server.port}")
    private String port;

    @GetMapping("/check")
    public String check() {
        return String.format("First Service on PORT %s", port);
    }
}
