package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.models.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerDao extends CrudRepository<Player, Long> {
    @Query("SELECT p FROM Player p  WHERE p.id= :player_id")
    List<Player> findByPlayerId(int player_id);
}
