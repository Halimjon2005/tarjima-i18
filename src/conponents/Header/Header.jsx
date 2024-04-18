import React from 'react'
import "./header.css"
import Nav from '../nav/Nav'
import { useTranslation } from 'react-i18next';
const Header = () => {

    const {t}= useTranslation()


  
  return (
    <div>
       <header>
        <Nav/>
        <div className="container">
            <div className="h_text">
                <h1>
    {t('h1')}
                </h1>
                <p>    {t('h2')} </p>
                <div className="btn_h">
                <button>     {t('h3')}</button>
                <button>    {t('h4')}</button>
                </div>
            </div>
        </div>
       </header>
    </div>
  )
}

export default Header
