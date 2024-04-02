package com.takima.backskeleton.controllers;


import com.takima.backskeleton.models.Player;
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


    @GetMapping("/{id}")
    public Player getById(@PathVariable Long id) {
        return playerService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        playerService.deleteById(id);
    }

    @PostMapping("")
    public void addStudent(@RequestBody Player player) {
        playerService.addPlayer(player);
    }

    @PostMapping("/{id}")
    public void updateStudent(@RequestBody Player player, @PathVariable Long id) {
        playerService.updatePlayer(player, id);
    }
}
