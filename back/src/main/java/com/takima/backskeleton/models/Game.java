package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "game")
@Getter
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "game_id_game_seq")
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

    public Game(){

    }

    public Game(Builder builder){
        this.id_game= builder.id;
        this.id_p1= builder.idP1;
        this.id_p2= builder.idP2;
        this.id_p3= builder.idP3;
        this.id_p4= builder.idP4;
        this.id_cat= builder.idCat;
    }

    public static class Builder {
        private Long id;
        private Long idP1;
        private Long idP2;
        private Long idP3;
        private Long idP4;
        private Long idCat;


        public Game.Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Game.Builder idP1(Long idP1) {
            this.idP1 = idP1;
            return this;
        }
        public Game.Builder idP2(Long idP2) {
            this.idP2 = idP2;
            return this;
        }
        public Game.Builder idP3(Long idP3) {
            this.idP3 = idP3;
            return this;
        }

        public Game.Builder idP4(Long idP4) {
            this.idP4 = idP4;
            return this;
        }

        public Game.Builder idCat(Long idCat) {
            this.idCat = idCat;
            return this;
        }
        public Game build() {
            return new Game(this);
        }
    }
}
