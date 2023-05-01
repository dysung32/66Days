package com.ssafy.Article.model.service;

import com.ssafy.Article.model.entity.Article;
import com.ssafy.Article.model.entity.Group;
import com.ssafy.Article.model.entity.user.User;
import com.ssafy.Article.model.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final GroupRepository groupRepository;
    private final UserRepository userRepository;

    public ArticleService(ArticleRepository articleRepository, GroupRepository groupRepository, UserRepository userRepository) {

        this.articleRepository = articleRepository;
        this.groupRepository = groupRepository;
    }
    public Article createArticle(Article article, UserDetails currentUser) {
        User user = userRepository.findByUserUuid(currentUser.getUuid())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Group group = groupRepository.findByUuId(articleRequest.getGroupId())
                .orElseThrow(() -> new RuntimeException("Group not found"));

//        Article articleCreate = Article.builder()
//                .title(article.getTitle())
//                .content(article.getContent())
//                .created_at(LocalDateTime.now())
//                .is_deleted(0)
//                .user(user)
//                .group(group)
//                .build();

        article.setArticle_id(UUID.randomUUID());
        article.setGroup();//이 글이 작성된 그룹의 id값을 가져와서 넣는다);
        article.setUser();//이 글을 작성한 유저의 id값을 가져와서 넣는다);
        article.setTitle(article.getTitle());
        article.setContent(article.getContent());
        article.setCreated_at(LocalDateTime.now());
        article.setIs_deleted(0);
        return articleRepository.save(article);

    }
}
