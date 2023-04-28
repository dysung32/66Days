package com.ssafy.api.model.entity.user;

import javax.persistence.*;
import java.util.*;
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String email;
//    @Enumerated(EnumType.STRING)
//    private UserRole role;
//    @Enumerated(EnumType.STRING)
//    private Provider provider;
    private String nickname;
    private Integer compl_habit_cnt;
    private Long exp;
    private Long point;
    private String github_url;
    private String blog_url;
    private Date reg_dt;
    private Date chg_dt;
    private Date rmvd_dt;

    // 연결


}
