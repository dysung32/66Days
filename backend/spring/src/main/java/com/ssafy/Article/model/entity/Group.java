package com.ssafy.Article.model.entity;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="group")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Group {

    @Id
    @GeneratedValue
//    @GenericGenerator(name = "uuid", strategy = "uuid4")
    @Column(name="group_id", nullable=false, columnDefinition = "BINARY(16")
    private UUID group_id;

    @NotBlank
    @Column(name = "name", nullable = false)
    private String group_name;
    @NotNull
    @Column(name = "member_count", nullable = false, columnDefinition = "TINYINT")
    private Integer member_count = 0;
    @Column(name = "image_path", nullable = true)
    private String image_path;
    @NotNull
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime created_at;
    @NotNull
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updated_at;
    @NotNull
    @Column(name = "is_deleted", nullable = false, columnDefinition = "TINYINT")
    private Integer is_deleted = 0;



}
