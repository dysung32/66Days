package com.ssafy.Article.controller;

import com.ssafy.Article.model.entity.Article;
import com.ssafy.Article.model.service.ArticleService;
import com.ssafy.Article.model.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/articles")
public class ArticleController {
    private final ArticleService articleService;
    private final UserService userService;
    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article, @AuthenticationPrincipal UserDetails currentUser) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        article.setUser(userService.getUserByUserUuid(currentUser.getUuid()));
        Article createArticle = articleService.createArticle(article, currentUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(createArticle);

    }
}
