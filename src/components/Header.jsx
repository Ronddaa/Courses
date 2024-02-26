import mainLogo from '../assets/mainLogo.svg';
import sprite from '../assets/icons.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className="container wrapperHeader">
        <Link to="/Courses"><img src={mainLogo} alt="Logo" /></Link>
        <div className="wrapperHeaderNavigation">
          <a href="tel:+380680333203" className="phoneNumberLinkHeader">+380 68 033 32 03</a>
          <a href="https://www.instagram.com/ivanna_katrych?igsh=NTd6cjIzejlqNmF0" className="mainLinkToInstagram" target='_blank' rel='noreferrer'><svg className='mainLinkToInstagramSVG' width={50} height={50}><use xlinkHref={`${sprite}#icon-instagram`} /></svg></a>
          <svg className='burgerMenuBtn' width={50} height={50} onClick={() => {
            document.querySelector('.wrapperBurgerMenu').classList.add('openBurgerMenuBtn')
          }}><use xlinkHref={`${sprite}#icon-burger-menu`} /></svg>
        </div>
      </div>
      <div className="wrapperBurgerMenu">
        <div className="burgerMenu">
          <svg className='closeBurgerBtn' width={50} height={50} onClick={() => {
            document.querySelector('.wrapperBurgerMenu').classList.remove('openBurgerMenuBtn')
          }}><use xlinkHref={`${sprite}#icon-close`} /></svg>
          <h2 className="titleUserName" id='titleUserName'>Oleh</h2>
          <button className='loadMoreBurgerBtn' id='loadMoreBurgerBtn'>КУРСИ
          <svg className='loadMoreSVG' width={20} height={20}><use xlinkHref={`${sprite}#icon-arrowUp`} /></svg>
          </button>
          <button className='exitToLogIn' id='exitToLogIn'>Вийти
          <svg className='exit' width={30} height={30}><use xlinkHref={`${sprite}#icon-exit`} /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}