package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryDao extends JpaRepository<Category, Long> {
}
