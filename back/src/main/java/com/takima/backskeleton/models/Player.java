package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.Instant;
import java.util.List;

//les @ c'est des décorateurs
@Entity //ce qui permet de dire que la classe à un homologue dans la bdd
@Table(name = "player") //fait réference à la table corresp
@Getter
public class Player {
    @Id //Pour faire correspondre les clés
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Génère les id
    private int id;
    @Column(name = "pseudo")
    private String pseudo;
    @Column(name = "score")
    private int score;
    @Column(name = "classement")
    private int classement;

    public Player (){

    }
}
