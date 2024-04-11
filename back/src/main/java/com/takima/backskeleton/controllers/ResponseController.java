package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Response;
import com.takima.backskeleton.services.CategoryService;
import com.takima.backskeleton.services.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Response getById(@PathVariable Long id){return responseService.getById(id);}

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable Long id){responseService.deleteById(id);}

    @PostMapping("")
    public Response addResponse(@RequestBody Response response){return responseService.addResponse(response);}

    @PostMapping("/{id}")
    public Response updateResponse(@RequestBody Response response, @PathVariable Long id){
        return responseService.updateResponse(response,id);
    }
}
