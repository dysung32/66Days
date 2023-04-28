package com.ssafy.api.model.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KakaoService {
    public static final String TOKEN_PREFIX = "Bearer";
    public static final String HEADER_STRING = "Authorization";

//    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    private String KAKAO_KEY;

//    @Value("${spring.security.oauth2.client.registration.kakao.redirect_url}")
    private String KAKAO_REDIRECT_URL;
}
