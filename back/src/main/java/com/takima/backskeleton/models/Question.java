package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.Instant;
import java.util.List;

//les @ c'est des décorateurs
@Entity //ce qui permet de dire que la classe à un homologue dans la bdd
@Table(name = "question") //fait réference à la table corresp
@Getter
public class Question {
    @Id //Pour faire correspondre les clés
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_id_question_seq") //Génére les id
    private Long id_question;
    @Column(name = "name_img")
    private String name_img;

    @Column(name = "id_cat")
    private Long id_cat;

   // @Column(name = "id_res")
    //private Long id_res;
    //@ManyToOne(cascade = CascadeType.MERGE)


    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_res")
    private Response REP;







    public void setId_question(Long id_question) {
        this.id_question = id_question;
    }

    public void setName_img(String name_img) {
        this.name_img = name_img;
    }

    public void setId_category(Long id_category) {
        this.id_cat = id_category;
    }

  //  public void setIdResponse(Long id_response) {this.id_res = id_response;}

    private Question(Builder builder) {
        this.id_question = builder.id_question;
        this.name_img = builder.name_img;
        this.id_cat= builder.id_category;
       // this.id_res= builder.id_response;
        this.REP=builder.REP;

    }
    public Question() {
    }

   // public Long getIdResponse() {return id_res ;}



    public static class Builder {
        private Long id_question;
        private String name_img;
        private Long id_category;
        private Long id_response;
        private Response REP;

        public Builder id (Long id_question) {
            this.id_question = id_question;
            return this;
        }
        public Builder REP(Response R)
        {
            this.REP=R;
            return this;
        }

        public Builder name_img(String name_img) {
            this.name_img = name_img;
            return this;
        }
        public Builder id_cat (Long id_category) {
            this.id_category = id_category;
            return this;
        }
        public Builder id_res (Long id_response) {
            this.id_response = id_response;
            return this;
        }

        public Question build() {
            return new Question(this);
        }
    }
}
