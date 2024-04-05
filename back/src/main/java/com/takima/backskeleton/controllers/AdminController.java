package com.takima.backskeleton.controllers;

import com.takima.backskeleton.DTO.StudentDto;
import com.takima.backskeleton.models.Admin;
import com.takima.backskeleton.models.Course;
import com.takima.backskeleton.services.AdminService;
import com.takima.backskeleton.services.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("admin")
@RestController
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @GetMapping("")
    public List<Admin> getAllAdmin() {
        return adminService.findAll();
    }


    @PostMapping("")
    public void updateQuestion(@PathVariable Long id, @PathVariable String r1,@PathVariable String r2,@PathVariable String r3) {
        adminService.modifierQuestion(id, r1, r2, r3);
    }
   // public void ajouterQuestion(String rep1, String rep2, String rep3, Long id_cat,String Chemin)

    @PostMapping("/{id}")
    public void AddQuestion(@PathVariable String r1,@PathVariable String r2,@PathVariable String r3, @PathVariable Long id,
                            @PathVariable String chemin) {
       adminService.ajouterQuestion(r1, r2, r3, id, chemin);
    }

    @DeleteMapping("/{id}")
    public void supprimerQuestion(@PathVariable Long id) {
        adminService.supprimerQuestion(id);
    }
}
