package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.CourseDao;
import com.takima.backskeleton.DAO.ResponseDao;
import com.takima.backskeleton.models.Course;
import com.takima.backskeleton.models.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Component
@RequiredArgsConstructor
public class ResponseService {
    private final ResponseDao responseDao;

    public List<Response> findAll() {
        return responseDao.findAll();
    }

    public Response getById(Long id){ return responseDao.findById(id).orElseThrow();}

    @Transactional
    public Response addResponse(Response response){
        return responseDao.save(response);
    }

    @Transactional
    public void deleteById(Long id){responseDao.deleteById(id);}

    @Transactional
    public Response updateResponse(Response response, Long id){
        responseDao.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Response doesn't exist"));

        return responseDao.save(response);
    }
}
