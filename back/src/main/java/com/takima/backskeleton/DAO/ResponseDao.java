package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Question;
import com.takima.backskeleton.models.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseDao extends JpaRepository<Response, Long> {
}
