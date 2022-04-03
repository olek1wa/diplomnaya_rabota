import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'

export const AddSubject = () => {

    const [subject, addSubject] = useState({
        state:'0',
        name:'',
        mark:'',
        officehours:'',
        contact:''
    })


    const subjectchangeHandler = event => {
        addSubject({ ...subject, [event.target.name]: event.target.value })
    }


    const subjectadd = () => {
        axios.post("/api/text/addsubject", subject)
            .then((response) => {
                console.log(response.data.message)
                window.location.reload(false);
            }, (error) => {
                console.log(error)
            })

    }


    return(
        <div className="row">
            <div className="col s12">

                <div className="card white z-depth-0 center" style={{padding: 10, minHeight: 200}}>
                    <input placeholder="название предмета" name="name" onChange={subjectchangeHandler}/>
                    <input placeholder="оценка" name="mark" onChange={subjectchangeHandler}/>
                    <input placeholder="офис часы (где, когда)" name="officehours" onChange={subjectchangeHandler}/>
                    <input placeholder="контакты (преподаватель)" name="contact" onChange={subjectchangeHandler}/>
                    <button className='btn' onClick={subjectadd}>Добавить</button>
                </div>

            </div>

        </div>


    )
}
