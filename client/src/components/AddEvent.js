import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'

export const AddEvent = () => {

    const [event1, addEvent1] = useState({
        state:'1',
        name:'',
        type:'',
        place:'',
        date:''
    })

    const event1changeHandler = event => {
        addEvent1({ ...event1, [event.target.name]: event.target.value })
    }

    const eventadd = () => {
    if(event1.name !== '' && event1.type !== 'тип мероприятия'&& event1.place !== '' && event1.date !== ''){
        axios.post("/api/text/addevent", event1)
            .then((response) => {
                console.log(response.data.message)
                window.location.reload(false);
            }, (error) => {
                console.log(error)
            })
    }
    }

    return(

        <div class="row">
            <div className="col s12">

                <div className="card white z-depth-0 center" style={{padding:10, minHeight:200}}>
                    <select className="browser-default" onChange={event1changeHandler} name="type">
                        <option value="Тип мероприятия" disabled selected>Тип мероприятия</option>
                        <option value="развлекательные">развлекательные</option>
                        <option value="учебные">учебные</option>
                    </select>
                    <input placeholder="название мероприятия" name="name" onChange={event1changeHandler}/>
                    <input type='date' placeholder="date" name="date" onChange={event1changeHandler}/>
                    <input placeholder="место проведения" name="place" onChange={event1changeHandler}/>
                    <button className='btn' onClick={eventadd}>Добавить</button>

                </div>

            </div>

        </div>

    )
}
