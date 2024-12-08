import React from 'react';
import classes from './LoginReg.module.css';
import { Link } from "react-router-dom";

const Registration = () => {
    const handleClick = (e) => {
        let changeColorBlock = document.querySelectorAll('.tabs');
        for (let elem of changeColorBlock) {
            elem.style.backgroundColor = "#F1F5F9";
        }
        e.currentTarget.style.backgroundColor = "#FFFFFF";
    };
    return (
        <div className={classes.form}>
            <div>
                <h4>Создать аккаунт</h4>
                <div style={{marginBottom: '16px'}}>
                    <label>Почта</label>
                    <input type='text' placeholder='Введите почту'></input>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <label>Пароль</label>
                    <input type='text' placeholder='Введите пароль'></input>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <label>Повторите пароль</label>
                    <input type='text' placeholder='Повторите пароль'></input>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <label>Выберите роль</label>
                    <div className={classes.tab}>
                        <button className="tabs" onClick={handleClick}>Читатель</button>
                        <button className="tabs" onClick={handleClick}>Автор</button>
                    </div>
                </div>
                <div style={{marginBottom: '16px'}}><button className={classes.createBtn}>Создать аккаунт</button></div>
                <div>
                    Уже есть аккаунт?
                    <Link to="/Login">Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;