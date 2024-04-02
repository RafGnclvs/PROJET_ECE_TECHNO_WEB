package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.AdminDao;
import com.takima.backskeleton.DAO.CourseDao;
import com.takima.backskeleton.DAO.QuestionDao;
import com.takima.backskeleton.DAO.ResponseDao;
import com.takima.backskeleton.models.Admin;
import com.takima.backskeleton.models.Course;
import com.takima.backskeleton.models.Question;
import com.takima.backskeleton.models.Response;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class AdminService {
    private final AdminDao adminDao;


    public List<Admin> findAll() {
        return adminDao.findAll();
    }


   // public void modifierQuestion(Long JO, String Rep1, String Rep2, String Rep3){}

    /*
   public void modifierQuestion(Long JO, String Rep1, String Rep2, String Rep3) {

       // Rechercher la question dans la base de données par son ID
       QuestionDao questionDao = null;
       ResponseDao responseDao = null ;
       Optional<Question> optionalQuestion = questionDao.findById(JO);

       // Vérifier si la question existe
       if (optionalQuestion.isPresent()) {
           Question question = optionalQuestion.get();

           // Récupérer l'identifiant de la réponse associée à la question
           Long responseId = question.getIdResponse();

           // Rechercher la réponse dans la base de données par son ID
           Optional<Response> optionalResponse = responseDao.findById(responseId);

           // Vérifier si la réponse existe
           if (optionalResponse.isPresent()) {
               Response response = optionalResponse.get();

               // Mettre à jour les réponses de la réponse associée
               response.setResp1(Rep1);
               response.setResp2(Rep2);
               response.setResp3(Rep3);

               // Enregistrer les modifications dans la base de données
               responseDao.save(response);
           } else {
               throw new NoSuchElementException("Response with id " + responseId + " not found");
           }
       } else {
           throw new NoSuchElementException("Question with id " + JO + " not found");
       }
   }




   public void ajouterQuestion(String rep1, String rep2, String rep3, Long id_cat,String Chemin) {
       QuestionDao questionDao = null;
       ResponseDao responseDao = null ;
       // Vérifier si les réponses ne sont pas nulles ou vides
       if (rep1 == null || rep1.isEmpty() || rep2 == null || rep2.isEmpty() || rep3 == null || rep3.isEmpty()) {
           throw new IllegalArgumentException("Les réponses ne peuvent pas être nulles ou vides");
       }
         //CREATION QUESTION
       Question Quest = new Question();
       Quest.setId_category(id_cat);
       Quest.setName_img(Chemin);

       // Créer une nouvelle réponse pour la question
       Response response = new Response();
       response.setResp1(rep1);
       response.setResp2(rep2);
       response.setResp3(rep3);

       // Enregistrer la réponse dans la base de données
       Response savedResponse = responseDao.save(response);

       // Associer l'ID de la réponse à la question
       Quest.setIdResponse(savedResponse.getId());

       // Enregistrer la question dans la base de données
       questionDao.save(Quest);


   }
*/
    @Transactional
    public void supprimerQuestion(Long id) {
        QuestionDao questionDao = null;

        Optional<Question> optionalQuestion = questionDao.findById(id);

        if (optionalQuestion.isPresent()) {

            questionDao.deleteById(id);
        } else {
            throw new NoSuchElementException("Question with id " + id + " not found");
        }
    }

    }
