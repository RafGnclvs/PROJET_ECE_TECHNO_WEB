package com.takima.backskeleton.controllers;


import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.models.Question;
import com.takima.backskeleton.models.Student;
import com.takima.backskeleton.services.PlayerService;
import com.takima.backskeleton.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("player")
@RestController
@RequiredArgsConstructor
public class PlayerController {
    private final PlayerService playerService;


    @GetMapping("")
    public List<Player> getAllPlayers() {
        return playerService.findAll();
    }
    @GetMapping("/{id}")
    public Player getById(@PathVariable Long id) {
        return playerService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable Long id) {
        playerService.deleteById(id);
    }

    @PostMapping("")
    public Player addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @PostMapping("/{id}")
    public Player updatePlayer(@RequestBody Player player, @PathVariable Long id) {
        return playerService.updatePlayer(player, id);
    }
}
