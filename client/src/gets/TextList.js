import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'


export const TextList = ({ texts }) => {



    return (
        <div className = "row">
            <div className = "col s12">

                { texts.map((text, index) => {
                    return (
                        <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>
                            <p className="pcl"><span className = "hspan">Ключ: </span>{text.key}</p>
                            <p className="pcl"><span className = "hspan">Сообщение: </span>{text.text}</p>
                        </div>
                    )
                }) }

            </div>
        </div>

    )



}
