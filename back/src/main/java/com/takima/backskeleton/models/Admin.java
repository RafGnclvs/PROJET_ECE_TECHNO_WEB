package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;

//les @ c'est des décorateurs
@Entity //ce qui permet de dire que la classe à un homologue dans la bdd
@Table(name = "admin") //fait réference à la table corresp
@Getter
public class Admin {
    @Id //Pour faire correspondre les clés
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "admin_id_admin_seq") //Génère les id
    private int id;
    @Column(name = "name")
    private String name;

    public Admin(){

    }
}
