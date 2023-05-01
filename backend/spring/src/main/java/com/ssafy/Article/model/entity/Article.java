package com.ssafy.Article.model.entity;

import com.ssafy.Article.model.entity.user.UserInfo;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="Article")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Article {

    @Id
    @GeneratedValue
//    @GenericGenerator(name="uuid", strategy="uuid4")
    @Column(name="article_id", nullable= false, columnDefinition = "BINARY(16)")
    private UUID article_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id", nullable = false)
    private Group group;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserInfo user;

    @NotBlank
    @Column(name = "title", length=256, nullable = false)
    private String title;

    @NotBlank
    @Column(name="content", nullable = false)
    private String content;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable= false)
    private Date created_at;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name= "updated_at", nullable = false)
    private Date updated_at;

}
