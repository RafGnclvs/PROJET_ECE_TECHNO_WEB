package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "response")
@Getter
@Setter
public class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "response_id_response_seq")
    private Long id_response;

    @Column(name = "resp1")
    private String resp1;

    @Column(name = "resp2")
    private String resp2;

    @Column(name = "resp3")
    private String resp3;


    @Column(name = "good_resp")
    private String good_resp;

    public String getResp2() {
        return resp2;
    }

    public void setResp2(String resp2) {
        this.resp2 = resp2;
    }

    public String getResp3() {
        return resp3;
    }

    public String getGood_resp() {
        return good_resp;
    }

    public void modifier(String nv_rep1, String nv_rep2,String nv_rep3)
    {
        //ON MODIFIE LES 3 REPONSES
        setResp1(nv_rep1);
        setResp2(nv_rep2);
        setResp3(nv_rep3);

    }

    public Long getId()
    {
        return this.id_response ;
    }

    public Response(){

    }

    private Response (Builder builder){
        this.id_response = builder.id_response;
        this.resp1 = builder.resp1;
        this.resp2 = builder.resp2;
        this.resp3 = builder.resp3;
        this.good_resp = builder.good_resp;
    }

    public static class Builder {
        private Long id_response;
        private String resp1;
        private String resp2;
        private String resp3;
        private String good_resp;

        public Builder id_response(Long id_response){
            this.id_response = id_response;
            return this;
        }

        public Builder resp1(String resp1){
            this.resp1 = resp1;
            return this;
        }

        public Builder resp2(String resp2){
            this.resp2 = resp2;
            return this;
        }

        public Builder resp3(String resp3){
            this.resp3 = resp3;
            return this;
        }

        public Builder good_resp(String good_resp){
            this.good_resp = good_resp;
            return this;
        }

        public Response build() { return new Response(this); }
    }
}
