package com.ssafy.chatservice.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/chat-service")
@Slf4j
public class ChatController {
    Environment env;

    @Autowired
    public ChatController(Environment env) {
        this.env = env;
    }
    @GetMapping("/health_check")
    public String healthCheck() {
        return "OK";
    }

    @GetMapping("/message")
    public String message(@RequestHeader("first-request") String header){
        log.info(header);
        return "Hello World in First Service.";
    }

    @GetMapping("/check")
    public String check(HttpServletRequest request) {
        log.info("Server port={}", request.getServerPort());
        return String.format("Hi, there. This is a message from Chat Service on PORT %s", env.getProperty("local.server.port"));
    }
}
