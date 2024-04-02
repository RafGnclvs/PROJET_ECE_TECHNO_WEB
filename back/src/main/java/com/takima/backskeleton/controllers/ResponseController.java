package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Response;
import com.takima.backskeleton.services.CategoryService;
import com.takima.backskeleton.services.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("response")
@RestController
@RequiredArgsConstructor
public class ResponseController {
    private final ResponseService responseService;

    @GetMapping("")
    public List<Response> getAllResponse() {
        return responseService.findAll();
    }
}
