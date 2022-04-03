import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'

export const AddText = () => {

    const [text, addText] = useState({
        text:'',
        key:'',
    })


    const textchangeHandler = event => {
        addText({ ...text, [event.target.name]: event.target.value })
    }


    const textAdd = () => {
        axios.post("/api/text/addtext", text)
            .then((response) => {
                console.log(response.data.message)
                window.location.reload(false);
            }, (error) => {
                console.log(error)
            })

    }


    return(

        <div class="row">
            <div className="col s12">

                <div className="card white z-depth-0 center" style={{padding: 10}}>
                    <input placeholder="текст сообщения" name="text" onChange={textchangeHandler}/>
                    <input placeholder="ключ (пример: whatsapp)" name="key" onChange={textchangeHandler}/>
                    <button className='btn' onClick={textAdd}>Добавить</button>

                </div>

            </div>

        </div>

    )
}
