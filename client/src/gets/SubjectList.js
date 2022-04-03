import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'


export const SubjectList = ({ subject }) => {



    return (
        <div className = "row">
            <div className = "col s12">

                { subject.map((subject, index) => {
                    return (
                        <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>
                            <p className="pcl"><span className = "hspan">Название: </span>{subject.name}</p>
                            <p className="pcl"><span className = "hspan">Контакты: </span>{subject.contact}</p>
                            <p className="pcl"><span className = "hspan">Офис-часы: </span>{subject.officehours}</p>
                        </div>
                    )
                }) }

            </div>
        </div>

    )



}
