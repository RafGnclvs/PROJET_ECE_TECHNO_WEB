package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionDao extends JpaRepository<Question, Long> {
    @Query("SELECT q FROM Question q WHERE q.id_cat=:idCat")
    List<Question> findById_cat(long idCat);
}
