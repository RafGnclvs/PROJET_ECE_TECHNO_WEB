package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.CategoryDao;
import com.takima.backskeleton.DAO.CourseDao;
import com.takima.backskeleton.DAO.MajorDao;
import com.takima.backskeleton.models.Category;
import com.takima.backskeleton.models.Course;
import com.takima.backskeleton.models.Major;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryDao categoryDao;

   // public List<Category> findAll() {return categoryDao.findAll();}

    public List<Category> findAll() {
        Iterable<Category> it = categoryDao.findAll();
        List <Category> cat = new ArrayList<>();
        it.forEach(cat::add);
        return cat;
    }
}
