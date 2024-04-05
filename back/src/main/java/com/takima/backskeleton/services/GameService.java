package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.CategoryDao;
import com.takima.backskeleton.DAO.GameDao;
import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Game;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class GameService {
    private final GameDao gameDao;

   // public List<Category> findAll() {return categoryDao.findAll();}

    public List<Game> findAll() {
        Iterable<Game> it = gameDao.findAll();
        List <Game> gm = new ArrayList<>();
        it.forEach(gm::add);
        return gm;
    }
}
