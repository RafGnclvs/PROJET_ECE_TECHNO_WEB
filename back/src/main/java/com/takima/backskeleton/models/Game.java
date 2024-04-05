package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "game")
@NoArgsConstructor
@Getter
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_game;
    @Column(name = "id_p1")
    private Long id_p1;
    @Column(name = "id_p2")
    private Long id_p2;
    @Column(name = "id_p3")
    private Long id_p3;
    @Column(name = "id_p4")
    private Long id_p4;
    @Column(name = "id_cat")
    private Long id_cat;

}
