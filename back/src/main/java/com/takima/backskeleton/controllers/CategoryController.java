package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Admin;
import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.services.AdminService;
import com.takima.backskeleton.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("category")
@RestController
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("")
    public List<Category> getAllCategory() {
        return categoryService.findAll();
    }
}
