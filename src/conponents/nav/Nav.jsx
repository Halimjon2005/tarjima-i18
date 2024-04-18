import React from 'react'
 import "./nav.css"
import { useTranslation } from 'react-i18next'
const Nav = () => {
    const {  t,i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  
  return (
    <div>
      <nav>
        <div className="container">
            <div className="n_wrap">
                <div className="n_link">
 <p>{t('p1')} </p>
 <p>{t('p2')}</p>
 <p>{t('p3')}</p>
 <p>{t('p4')}</p>
                </div>
                <div className="n_btn">
<button onClick={() => changeLanguage("ru")}> ruz</button>
<button onClick={() => changeLanguage("uz")}>uzb</button>
<button className='btn_n'>Поступить</button>
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
