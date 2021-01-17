import React from 'react'
import cssObject from './Dialogs.module.css'
import {NavLink} from "react-router-dom"

const Dialogs = (props) => {
  return (
    <div className={cssObject.dialogs}>
        <div className={cssObject.dialogsItems}>
          <div className={cssObject.item + ' ' + cssObject.active}>
            <NavLink to="/dialogs/1">Dimych</NavLink>
          </div>
          <div className={cssObject.item}>
            <NavLink to="/dialogs/2">Sawka</NavLink>
          </div>
          <div className={cssObject.item}>
            <NavLink to="/dialogs/3">Olga</NavLink>
          </div>
          <div className={cssObject.item}>
            <NavLink to="/dialogs/4">Alex</NavLink>
          </div>
        </div>
        <div className={cssObject.messages}>
            <div className={cssObject.message}>message 1</div>
            <div className={cssObject.message}>message 2</div>
            <div className={cssObject.message}>message 3</div>
        </div>
    </div>
  );
}

export default Dialogs