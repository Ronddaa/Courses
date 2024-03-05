import './App.css';
import { Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';// eslint-disable-next-line no-unused-vars
import mainLogo from './mainLogo.svg';
import InstructorOnlineIMG from './coursesInstructorOnline.webp';
import sprite from './icons.svg';

const PrivateRoute = () => {
    const isLoggedIn = !!localStorage.getItem('login');
    return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
}
 export default function App() {
  return (
    <div className="allWrapper">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route element={<PrivateRoute />} >
                <Route path='Courses' element={<MainPage />} />
                <Route path='Courses/InstructorOnline' element={<InstructorOnline />} />
                <Route path='Courses/InstructorOnline/Leasson1' element={<InstructorOnlineLeasson1 />} />
                <Route path='Courses/InstructorOnline/Leasson2' element={<InstructorOnlineLeasson2 />} />
                <Route path='Courses/InstructorOnline/Leasson3' element={<InstructorOnlineLeasson3 />} />
                <Route path='Courses/InstructorOnline/Leasson4' element={<InstructorOnlineLeasson4 />} />
                <Route path='Courses/InstructorOnline/Leasson5' element={<InstructorOnlineLeasson5 />} />
                <Route path='Courses/InstructorOnline/Leasson6' element={<InstructorOnlineLeasson6 />} />
                <Route path='Courses/InstructorOnline/Leasson7' element={<InstructorOnlineLeasson7 />} />
                <Route path='Courses/InstructorOnline/Leasson8' element={<InstructorOnlineLeasson8 />} />
                <Route path='Courses/InstructorOnline/Leasson9' element={<InstructorOnlineLeasson9 />} />
                <Route path='Courses/InstructorOnline/Leasson10' element={<InstructorOnlineLeasson10 />} />
                <Route path='Courses/InstructorOnline/Leasson11' element={<InstructorOnlineLeasson11 />} />
                <Route path='Courses/InstructorOnline/Leasson12' element={<InstructorOnlineLeasson12 />} />
                <Route path='Courses/InstructorOnline/Leasson13' element={<InstructorOnlineLeasson13 />} />
                <Route path='Courses/InstructorOnline/Leasson14' element={<InstructorOnlineLeasson14 />} />
                <Route path='Courses/InstructorOnline/Leasson15' element={<InstructorOnlineLeasson15 />} />
                <Route path='Courses/InstructorOnline/Leasson16' element={<InstructorOnlineLeasson16 />} />
                <Route path='Courses/InstructorOnline/Leasson17' element={<InstructorOnlineLeasson17 />} />

            </Route>
          
          <Route path='*' element={<Error404 />}/>
        </Routes>     
    </div>
  )
}


 function Header() {
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
                  <button className='exitToLogIn' id='exitToLogIn' onClick={
                      () => {
                        localStorage.removeItem('login');
                        localStorage.removeItem('password');
                        window.location.href = '/';
                      }
          }>Вийти
          <svg className='exit' width={30} height={30}><use xlinkHref={`${sprite}#icon-exit`} /></svg>
          </button>
        </div>
      </div>
    </header>
  )
 }
function Main() {
    const handleSubmit = (e) => {
        e.preventDefault();
        let login = document.getElementById('InputLogInID').value;
        let password = document.getElementById('InputPassID').value;
        fetch('https://ivannakatrych.com.ua:3500/login', {
            method: "POST",
            body:  JSON.stringify({ 
                "name": login,
                "pass" : password
              })
        }).then(response => response.text())
        .then(text => {
            if (text == "true") {
                console.log('true');
                localStorage.setItem('login', login);
                localStorage.setItem('password', password);
        window.location.href = '/Courses';}
            else {
                console.log("wrong log");
                // сюди добав обробку помилки
            }
            
        })
        .catch(error => console.error(error));
  
        //document.getElementById("myForm").submit();
 
    }


    return (
        <div className="JustWrapper">
            <header className="header">
                <div className="container wrapperHeader">
                    <img className='headerLogoMain' src={mainLogo} alt="Logo" />
                    <div className="wrapperHeaderNavigation">
                        <a href="tel:+380680333203" className="phoneNumberLinkHeader">+380 68 033 32 03</a>
                        <a href="https://www.instagram.com/ivanna_katrych?igsh=NTd6cjIzejlqNmF0" className="mainLinkToInstagram" target='_blank' rel='noreferrer'><svg className='mainLinkToInstagramSVG' width={50} height={50}><use xlinkHref={`${sprite}#icon-instagram`} /></svg></a>
                    </div>
                </div>
            </header>
            <section className="startPageLogin">
                <div className="container wrapperStartPage">
                    <article className="HelloOnCourses">
                        <h1 className="TitleOnStartPage">ВІТАЄМО НА КУРСІ !</h1>
                        <p className="textOnStartPage">Увійдіть в систему з логіном і паролем, який 
                            ми надали вам, щоб отримати доступ до курсів</p>
                        <a href="" className="forgotPasswordLink">Не отримали пароль або логін?</a>
                    </article>
                    <article className="wrapperForm">
                        <h2 className="titleLogIn">вхід</h2>    
                        <form action="" className="mainFormLogIn" onSubmit={handleSubmit}>
                            <label htmlFor="InputLogInID" className="LabelLogIn">
                                <input type="text" className="InputLogIn" id="InputLogInID" required />
                                <span className="InputLogInPlaceholder">Логін</span>
                            </label>
                            <label htmlFor="InputPassID" className="LabelLogIn">
                                <input type="password" className="InputLogIn" id="InputPassID" required />
                                <span className="InputLogInPlaceholder">Пароль</span>
                            </label>
                            <button className="logInBtn" id="mainLogInBtn" type="submit">УВІЙТИ</button>
                        </form>
                    </article>
                </div>
            </section>
        </div>
    )
}
function InstructorOnline() {
    
    return (
        <div className="justWrapper">
            <Header />    
            <section className="InstructorOnline">
                <div className="container">
                    <h2 className="titleInstructorOnline">Курс: Instructor online</h2>
                    <ul className="InstructorOnlineLeassons">
                        <li className="InstructorOnlineList"  onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson1'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 1</h3>
                                <p className="nameOfLeasson">Знайомство зі мною</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson2'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 2</h3>
                                <p className="nameOfLeasson">Приміщення та матеріали (собівартість, оренда)</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson3'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 3</h3>
                                <p className="nameOfLeasson">Страх</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson4'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 4</h3>
                                <p className="nameOfLeasson">Ведення інстаграм (правила та помилки)</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson5'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 5</h3>
                                <p className="nameOfLeasson">Продаж матеріалів та співпраця з брендами</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson6'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 6</h3>
                                <p className="nameOfLeasson">Сертифікат, чи диплом. Створення логотипу</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson7'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 7</h3>
                                <p className="nameOfLeasson">Методи просування</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson8'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 8</h3>
                                <p className="nameOfLeasson">Фото для соцмереж</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson9'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 9</h3>
                                <p className="nameOfLeasson">Вигорання. Симптоми та запобігання</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson10'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 10</h3>
                                <p className="nameOfLeasson">Побудова структури першого курсу</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson11'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 11</h3>
                                <p className="nameOfLeasson">Онлайн, чи офлайн.Переваги та недоліки</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson12'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 12</h3>
                                <p className="nameOfLeasson">Співпраця з моделями</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson13'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 13</h3>
                                <p className="nameOfLeasson">Якщо не виходить в учнів. Що робити?</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson14'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 14</h3>
                                <p className="nameOfLeasson">Теорія для учнів. Подаємо впевнено</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson15'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 15</h3>
                                <p className="nameOfLeasson">Перше практичне заняття</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson16'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 16</h3>
                                <p className="nameOfLeasson">Підвищення кваліфікації</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={() => {window.location.href = '/Courses/InstructorOnline/Leasson17'}}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 17</h3>
                                <p className="nameOfLeasson">Дезинфекція та стерилізація</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson1() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №1: знайомство зі мною</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/Hc7Ctjbi3_8?si=wLSmiSaIq64-uM9D" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson2() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №2: Приміщення та матеріали (собівартість, оренда)</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/usa5VbynQHU?si=E1Lvd3YEyG8hCh87" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/Ms7hNB5bQ7U?si=CwdOr0E2xOtSXMiG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/QjkbvoXR9OE?si=YB90b4fzHAx1VQHw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/UAjH3MojXaU?si=lAHwHizbreGdfVqa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson3() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №3: Страх</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/tLAkHf9WzEc?si=S9q7WdSsAlpCfMNT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson4() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №4: Ведення інстаграм (правила та помилки)</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/IU6lcBXchwg?si=-ZOMYp5iksK-1dJX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/XRYqemANJkk?si=JWLkpauOiJOIj_at" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson5() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №5: Продаж матеріалів та співпраця з брендами</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/19A7wwyPjzU?si=W2aKLouGTkjkUnqB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson6() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №6: Сертифікат, чи диплом. Створення логотипу</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/1GSgupzfK_s?si=nqZsZfonNqKNaMVQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/gS_QUmTw4fI?si=pgUd7XJuMuAX6JX_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson7() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №7: Методи просування</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/P5P7aqMCNwY?si=BKHr4nOiInQO_PN0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson8() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №9: Фото для соцмереж</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/nQZAy18E7qI?si=xyzRI9rQIRt4YH_6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson9() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №10: Вигорання. Симптоми та запобігання</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/u8jH9L9Bcec?si=Px7oiGDEEijbDiri" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson10() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №11: Побудова структури першого курсу</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/TJlsfTbechs?si=L0MF7KMevPTOnZh5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/HEb1FxlgNTw?si=0CklFsFmTPXUcoME" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson11() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №12: Онлайн, чи офлайн.Переваги та недоліки</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/GX8WamJ1X0I?si=izn5itsWUIfc4XXU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson12() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №13: Співпраця з моделями</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/IX0T233jj2Q?si=_7DYaZ4fHyN9PVp1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson13() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №14: Якщо не виходить в учнів. Що робити?</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/e8MiuRU6alg?si=a-0cfcH_namENbPZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson14() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №15: Теорія для учнів. Подаємо впевнено</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/oVz24iALDmA?si=8DjfSx49gnAlF0DS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/UV0jxHbtQR0?si=A4pgqXJnH5NlzAyN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson15() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №16: Перше практичне заняття</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/JxDQHjrRinY?si=uAfQa01y_ESsWAM9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/6x5-EjQxGV8?si=rNzv6HYab2hkuBCh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson16() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №17: Підвищення кваліфікації</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/i15Ke3_ZkMM?si=X-C3O3XzaB6CHpAV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
export function InstructorOnlineLeasson17() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №17: Дезинфекція та стерилізація</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/3FxE1SHnSDM?si=l5siyJK6RkwFmaSx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className="titleSentHW">Надіслати домашнє завдання</h3>
                    <div className="wrapperHWmade">
                        <textarea name="HomeWork" id="homeWork" cols="30" rows="10"></textarea>
                    </div>
                    <button className="sentHomeWorkBtn" id="sentHomeWorkBtnID">НАДІСЛАТИ</button>
                </div>
            </section>
        </div>
    )
}
function MainPage() {
    
    const GoToInstructorOnline = () => {
        window.location.href = '/Courses/InstructorOnline';
    }
    
    return (
        <div className="JustWrapper">
            <Header />
            <section className="ourCourses">
                <div className="container">
                    <ul className="wrapperOurCourses">
                        <li className="ourCoursesList">
                            <article className="wrapperTitleFrstCourses">
                                <h2 className="titleFrstCourses">Курс: Instructor online</h2>
                                <p className="textUnderTitleCourses">Онлайн-курс в записі.</p>
                                <button className="goToFrstCoursesBtn" id="goToFrstCoursesBtnID" type="button" onClick={GoToInstructorOnline}>ДО КУРСУ</button>
                            </article>
                            <img src={InstructorOnlineIMG} alt="Instructor Online" className="frstCoursesIMG" width={500} height={500} />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
function Error404() {
    return (
        <div className="JustWrapper">
            <header className="header">
                <div className="container wrapperHeader">
                    <img src={mainLogo} alt="Logo" />
                    <div className="wrapperHeaderNavigation">
                        <a href="tel:+380680333203" className="phoneNumberLinkHeader">+380 68 033 32 03</a>
                        <a href="https://www.instagram.com/ivanna_katrych?igsh=NTd6cjIzejlqNmF0" className="mainLinkToInstagram" target='_blank' rel='noreferrer'><svg className='mainLinkToInstagramSVG' width={50} height={50}><use xlinkHref={`${sprite}#icon-instagram`} /></svg></a>
                    </div>
                </div>
            </header>
            <h1 className="titleError404">Сторінка не знайдена</h1>
        </div>
    )
}