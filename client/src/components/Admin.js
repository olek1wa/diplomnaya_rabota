import React, {Component, useContext, useEffect, useState} from 'react'
import M from 'materialize-css'
import {AddEvent} from "./AddEvent";
import {AddSubject} from "./AddSubject";
import {AddText} from "./AddText";
import {Events1Show} from "../gets/Events1Show";
import {Events2Show} from "../gets/Events2Show";
import {AdminLogout} from "./AdminLogout";
import {SubjectShow} from "../gets/SubjectShow";
import {TextShow} from "../gets/TextShow";

class Admin extends Component{
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }

  render() {
    return(
        <>
            <div className='row'>
                <div className='col s12'>
                    <div className = 'container'>
                        <h4 className='label-reg'>Администрирование</h4>
                        <AdminLogout/>

                        <div className='col s12' style={{marginTop:20}}>
                            <ul
                                ref={Tabs => {
                                    this.Tabs = Tabs;
                                }}
                                id="tabs-swipe-demo"
                                className="tabs transparent"
                            >
                                <li className="tab transparent col s3">
                                    <a className='tabber' href="#test-swipe-1">Мероприятия</a>
                                </li>
                                <li className="tab transparent col s3">
                                    <a className='tabber' href="#test-swipe-2">Добавить Предмет</a>
                                </li>
                                <li className="tab transparent col s3">
                                    <a className='tabber' href="#test-swipe-3">Добавить Ключ</a>
                                </li>
                            </ul>

                            <div id="test-swipe-1" style={{marginTop:30}}>
                                <div style={{minHeight:'100vh'}}>
                                    <h5>Развлекательные</h5>
                                    <div style={{maxHeight:200, overflow:'auto', background:'white', padding:10, borderRadius:10}}>
                                        <Events1Show/>
                                    </div>

                                    <h5>Учебные</h5>
                                    <div style={{maxHeight:200, overflow:'auto', background:'white', padding:10, borderRadius:10}}>
                                        <Events2Show/>
                                    </div>

                                    <h5>Добавить мероприятие</h5>
                                    <AddEvent/>
                                </div>


                            </div>


                            <div id="test-swipe-2" style={{marginTop:30}}>
                                <div style={{minHeight:'100vh'}}>
                                    <h5>Предметы</h5>
                                    <div style={{maxHeight:200, overflow:'auto', background:'white', padding:10, borderRadius:10}}>
                                        <SubjectShow/>
                                    </div>

                                    <h5>Добавить предмет</h5>
                                    <AddSubject/>
                                </div>
                            </div>

                            <div id="test-swipe-3" style={{marginTop:30}}>
                                <div style={{minHeight:'100vh'}}>
                                    <h5>Записи</h5>
                                    <div style={{maxHeight:200, overflow:'auto', background:'white', padding:10, borderRadius:10}}>
                                        <TextShow/>
                                    </div>

                                    <h5>Добавить запись</h5>
                                    <AddText/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
  }
}

export default Admin;
          /*<div className="card white">


            */

