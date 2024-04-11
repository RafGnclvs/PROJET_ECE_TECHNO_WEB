package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Question;
import com.takima.backskeleton.models.Response;
import com.takima.backskeleton.models.Student;
import com.takima.backskeleton.services.QuestionService;
import com.takima.backskeleton.services.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("question")
@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    @GetMapping("")
    public List<Question> getAllQuestion() {
        return questionService.findAll();
    }

    @GetMapping("/{id_cat}")
    public List<Question> findById_cat(@PathVariable Long id_cat) {
        return questionService.getByIdCategory(id_cat);
    }

    @GetMapping("//{id}")
    public Question getById(@PathVariable Long id){return questionService.getById(id);}

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id){questionService.deleteById(id);}

    @PostMapping("")
    public Question addQuestion(@RequestBody Question question){return questionService.addQuestion(question);}

    @PostMapping("/{id}")
    public Question updateQuestion(@RequestBody Question question, @PathVariable Long id) {
        return questionService.updateQuestion(question,id);
    }
}
