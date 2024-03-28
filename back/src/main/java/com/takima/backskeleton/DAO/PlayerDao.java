package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.models.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerDao extends CrudRepository<Player, Integer> {
    @Query("SELECT p FROM Player p")
    List<Player> findByPlayerId(int id);
}
