package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.CategoryDao;
import com.takima.backskeleton.DAO.QuestionDao;
import com.takima.backskeleton.DTO.StudentDto;
import com.takima.backskeleton.DTO.StudentMapper;
import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Question;
import com.takima.backskeleton.models.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Component
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionDao questionDao;



    public List<Question> findAll() {
        Iterable<Question> it = questionDao.findAll();
        List <Question> Quest = new ArrayList<>();
        it.forEach(Quest::add);
        return Quest;
    }
    public Question getById(Long id) {
        return questionDao.findById(id).orElseThrow();
    }

    public List<Question> getByIdCategory(long id_cat ){
        Iterable<Question> it = questionDao.findById_cat(id_cat);
        List <Question> Quest = new ArrayList<>();
        it.forEach(Quest::add);
        return Quest;
    }

    @Transactional
    public void deleteById(Long id) {
        questionDao.deleteById(id);
    }

    @Transactional
    public Question addQuestion (Question question) {
        return questionDao.save(question);
    }

    @Transactional
    public Question updateQuestion(Question question, Long id) {
        questionDao.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Question doesn't exist"));

        return questionDao.save(question);
    }

}
