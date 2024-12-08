import React from 'react';
import classes from "./LoginReg.module.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className={classes.form}>
            <div>
                <h4>Войти</h4>
                <div style={{marginBottom: '16px'}}>
                    <label>Почта</label>
                    <input type='text' placeholder='Введите почту'></input>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <label>Пароль</label>
                    <input type='text' placeholder='Введите пароль'></input>
                </div>
                <div style={{marginBottom: '16px'}}><button className={classes.createBtn}>Войти</button></div>
                <div>
                    Нет аккаунта?
                    <Link to="/Registration">Создать аккаунт?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;