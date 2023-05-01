package com.ssafy.Article.model.entity.user;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue
//    @GenericGenerator(name="uuid", strategy="uuid4")
    @Column(name="user_id", nullable= false, columnDefinition = "BINARY(16)")
    private UUID user_id;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false ,updatable = false)
    private LocalDateTime created_at;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "withdrawal_at", nullable = true)
    private LocalDateTime withdrawal_at;

    @NotNull
    @Column(name="state", nullable = false, columnDefinition = "TINYINT")
    private Integer state = 0;


}
