import React from 'react'
import style from "./Home.module.css"
import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
     {i18n.language!=='en'?<button className='btn btn-danger mx-3 ' onClick={()=>{i18n.changeLanguage('en')}}>En</button>:
     <button className='btn btn-danger' onClick={()=>{i18n.changeLanguage('ar')}}>AR</button>}

    <h1>{t('name')}:{t('salah')}</h1>
    
    </>
  )
}
