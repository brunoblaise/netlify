import axios from 'axios'



export const S1 = newCourseS1=>{
    return axios
    .post('/teacher/s1',{
       author: newCourseS1.author,
       syllabus: newCourseS1.syllabus,
       body:newCourseS1.body,
       exercise:newCourseS1.exercise,
       subject: newCourseS1.subject
    } )
        .then(res =>{
            console.log('created for s1')
        })
    }
   
    export const S2 = newCourseS2=>{
       return axios
       .post('/teacher/s2',{
          author: newCourseS2.author,
          syllabus: newCourseS2.syllabus,
          body:newCourseS2.body,
          exercise:newCourseS2.exercise,
          subject: newCourseS2.subject
       } )
           .then(res =>{
               console.log('created for s2')
           })
       }
   
   
       export const S3 =newCourseS3=>{
           return axios
           .post('/teacher/s3',{
              author:newCourseS3.author,
              syllabus: newCourseS3.syllabus,
              body:newCourseS3.body,
              exercise:newCourseS3.exercise,
              subject:newCourseS3.subject
           } )
               .then(res =>{
                   console.log('created for s3')
               })
           }
   
   

export const S5 = newCourseS1=>{
    return axios
    .post('/student/s1',{
       name: newCourseS1.name,
      day: newCourseS1.day,
      hour:newCourseS1.hour,
      clas:newCourseS1.clas
    } )
        .then(res =>{
            console.log('created for s1')
        })
    }
   
    export const S4 = newCourseS2=>{
       return axios
       .post('/answer/answer',{
           name: newCourseS2.name,
           clas:newCourseS2.clas,
           sub:newCourseS2.sub,
         question:newCourseS2.question
       } )
           .then(res =>{
               console.log('created for s2')
           })
       }
   
       export const S6 = newCourseS2=>{
        return axios
        .post('/answer/answ',{
            name: newCourseS2.name,
            hour:newCourseS2.hour,
     
        } )
            .then(res =>{
                console.log('created for s2')
            })
        }
   