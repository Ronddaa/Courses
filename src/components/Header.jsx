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
          <svg className='burgerMenu' width={50} height={50}><use xlinkHref={`${sprite}#icon-burger-menu`} /></svg>
        </div>
      </div>
    </header>
  )
}