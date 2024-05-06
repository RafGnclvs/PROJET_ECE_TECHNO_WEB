package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Game;
import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.services.CategoryService;
import com.takima.backskeleton.services.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("game")
@RestController
@RequiredArgsConstructor
public class GameController {
    private final GameService gameService;

    @GetMapping("")
    public List<Game> getAllgames() {
        return gameService.findAll();
    }

    @PostMapping("")
    public Game saveGame(@RequestBody Game game) {
        return gameService.addGame(game);
    }
}
