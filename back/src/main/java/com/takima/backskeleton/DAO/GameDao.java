package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameDao extends JpaRepository<Game, Long> {

}
