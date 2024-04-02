package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionDao extends JpaRepository<Question, Long> {
}
