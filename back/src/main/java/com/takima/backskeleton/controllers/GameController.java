package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Game;
import com.takima.backskeleton.services.CategoryService;
import com.takima.backskeleton.services.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
