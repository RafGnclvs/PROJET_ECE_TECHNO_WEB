package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.PlayerDao;
import com.takima.backskeleton.DTO.StudentDto;
import com.takima.backskeleton.DTO.StudentMapper;
import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.models.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerDao playerDao;

    public List<Player> findAll() {
        Iterable<Player> it= playerDao.findAll();
        List <Player> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }


    public Player getById(Long id) {
        return playerDao.findById(id).orElseThrow();
    }

    @Transactional
    public void deleteById(Long id) {
        playerDao.deleteById(id);
    }

    @Transactional
    public Player addPlayer( Player player) {

       return playerDao.save(player);
    }

    @Transactional
    public Player updatePlayer(Player player, Long id) {
        playerDao.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Player doesn't exist"));

        return playerDao.save(player);
    }

}
