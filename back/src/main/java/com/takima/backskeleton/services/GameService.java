package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.GameDao;
import com.takima.backskeleton.models.Game;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Component
@RequiredArgsConstructor
public class GameService {
    private final GameDao gameDao;

    public List<Game> findAll() {
        Iterable<Game> it = gameDao.findAll();
        List <Game> gm = new ArrayList<>();
        it.forEach(gm::add);
        return gm;
    }

    @Transactional
    public Game addGame(Game game) {
        return gameDao.save(game);
    }

    @Transactional
    public void deleteById(Long id) {
        gameDao.deleteById(id);
    }

    @Transactional
    public void deleteByIds(Long[] ids) {
        gameDao.deleteAllById(List.of(ids));
    }
}
