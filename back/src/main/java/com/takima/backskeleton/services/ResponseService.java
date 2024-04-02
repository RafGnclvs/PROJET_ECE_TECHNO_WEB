package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.CourseDao;
import com.takima.backskeleton.DAO.ResponseDao;
import com.takima.backskeleton.models.Course;
import com.takima.backskeleton.models.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ResponseService {
    private final ResponseDao responseDao;

    public List<Response> findAll() {
        return responseDao.findAll();
    }
}
