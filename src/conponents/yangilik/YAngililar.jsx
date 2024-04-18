import React from 'react'
import "./yangilik.css"
import { useTranslation } from 'react-i18next'
const YAngililar = () => {

  const {  t,i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="container">
        <div className="h1">
<h1> {t('p1')} </h1>
        </div>
        <div className="yangilik_card">
  <p>
    {t('y')}
  </p>
          </div>
      </div>
    </div>
  )
}

export default YAngililar
