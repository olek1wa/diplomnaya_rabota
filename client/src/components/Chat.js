import React, {useState} from 'react';
import send from '../images/send.png';
import axios from "axios";

export const Chat = () => {

    const [chat, setChat] = useState({
        mess:'еще нет собщения',
    })

    const [text, addText] = useState({
        key:'',
    })


    const textchangeHandler = event => {
        addText({ ...text, [event.target.name]: event.target.value })
    }


    const sendHandler = () => {
        axios.post("/api/text/textsearch", text)
            .then((response) => {
                setChat({mess: response.data.message})
            }, (error) => {
                console.log(error)
            })

    }
    return(
        <>
            <div className='center' style={{minHeight:50, padding:2}}>
                ответ:

                {chat.mess}

            </div>
            <div>
                <div style={{flex:'display', flexDirection:'row', padding:15, position:'absolute', bottom:50, justifyContent:'center'}} className={'center'}>
                    <input name='key' onChange={textchangeHandler} style={{width:'100%', }}/>
                    <button className='btn' onClick={sendHandler}>отправить</button>
                </div>

            </div>
        </>
    )
}
