package com.takima.backskeleton.models;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.Instant;
import java.util.List;

//les @ c'est des décorateurs
@Entity //ce qui permet de dire que la classe à un homologue dans la bdd
@Table(name = "students") //fait réference à la table corresp
@Getter
public class Student {
    @Id //Pour faire correspondre les clés
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "students_id_seq") //Génére les id
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private Instant birthdate;
    @ManyToMany
    @JoinTable(
            name = "student_course",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private List<Course> courses;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "major_id")
    private Major major;

    private Student(Builder builder) {
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.birthdate = builder.birthdate;
        this.courses = builder.courses;
        this.major = builder.major;
    }
    public Student() {
    }

    public static class Builder {
        private Long id;
        private String firstName;
        private String lastName;
        private Instant birthdate;
        private List<Course> courses;
        private Major major;

        public Builder id (Long id) {
            this.id = id;
            return this;
        }

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }
        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }
        public Builder courses(List<Course> courses) {
            this.courses = courses;
            return this;
        }
        public Builder major(Major major) {
            this.major = major;
            return this;
        }
        public Builder birthdate(Instant birthdate) {
            this.birthdate = birthdate;
            return this;
        }

        public Student build() {
            return new Student(this);
        }
    }
}
