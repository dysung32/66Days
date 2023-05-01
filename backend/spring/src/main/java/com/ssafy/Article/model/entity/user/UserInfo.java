package com.ssafy.Article.model.entity.user;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.*;

@Entity
@Table(name = "user_info")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserInfo {
    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name="profile_image_path", nullable = true)
    private String profile_image_path;
    @NotBlank
    @Column(name="nickname", nullable = false)
    private String nickname;

    @NotNull
    @Column(name = "exp", nullable = false)
    private Long exp = 0L;

    @NotNull
    @Column(name = "point", nullable = false)
    private Long point = 0L;

    @Column(name = "github_url", nullable = true)
    @Column(name = "github_url", nullable = true)
    private String github_url;

    @Column(name = "github_url", nullable = true)
    private String blog_url;

    @Column(name = "github_url", nullable = true)
    private String animal_name;

    // 연결


}
