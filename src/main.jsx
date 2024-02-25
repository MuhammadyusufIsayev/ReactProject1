import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Spe from './components/Spe'
import Content from './components/Content'
import Price from './components/Price'
import Rate from './components/Rate.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Main />
        <Spe />
        <Content />
        <Price />
        <Rate />
        <Footer />
    </>
)
