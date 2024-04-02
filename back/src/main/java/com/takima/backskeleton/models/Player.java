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
    private long id;
    @Column(name = "pseudo")
    private String pseudo;
    @Column(name = "score")
    private int score;
    @Column(name = "classement")
    private int classement;

    public Player (){

    }

    private Player(Builder builder) {
        this.id = builder.id;
        this.pseudo = builder.pseudo;
        this.score = builder.score;
        this.classement = builder.classement;
    }

    public static class Builder {
        private Long id;
        private String pseudo;
        private int score;
        private int classement;

        public Player.Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Player.Builder pseudo(String pseudo) {
            this.pseudo = pseudo;
            return this;
        }
        public Player.Builder score(int score) {
            this.score = score;
            return this;
        }
        public Player.Builder classement(int classement) {
            this.classement = classement;
            return this;
        }
        public Player build() {
            return new Player(this);
        }
    }
}
