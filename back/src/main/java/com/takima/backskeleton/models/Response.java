package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "response")
@NoArgsConstructor
@Getter
@Setter
public class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
}
