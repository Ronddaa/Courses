import Header from "./Header";
import sprite from '../assets/icons.svg';

export default function InstructorOnline() {
    
    const openLeasson = () => {
        window.location.href = '/Courses/InstructorOnline/Leasson';
    }
    return (
        <div className="justWrapper">
            <Header />    
            <section className="InstructorOnline">
                <div className="container">
                    <h2 className="titleInstructorOnline">Курс: Instructor online</h2>
                    <ul className="InstructorOnlineLeassons">
                        <li className="InstructorOnlineList"  onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 1</h3>
                                <p className="nameOfLeasson">Знайомство зі мною</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 2</h3>
                                <p className="nameOfLeasson">Приміщення та матеріали (собівартість, оренда)</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 3</h3>
                                <p className="nameOfLeasson">Страх</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 4</h3>
                                <p className="nameOfLeasson">Ведення інстаграм (правила та помилки)</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 5</h3>
                                <p className="nameOfLeasson">Продаж матеріалів та співпраця з брендами</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 6</h3>
                                <p className="nameOfLeasson">Сертифікат, чи диплом</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 7</h3>
                                <p className="nameOfLeasson">Методи просування</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 8</h3>
                                <p className="nameOfLeasson">Створення логотипу</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 9</h3>
                                <p className="nameOfLeasson">Фото для соцмереж</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 10</h3>
                                <p className="nameOfLeasson">Вигорання. Симптоми та запобігання</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 11</h3>
                                <p className="nameOfLeasson">Побудова структури першого курсу</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 12</h3>
                                <p className="nameOfLeasson">Онлайн, чи офлайн.Переваги та недоліки</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 13</h3>
                                <p className="nameOfLeasson">Співпраця з моделями</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 14</h3>
                                <p className="nameOfLeasson">Якщо не виходить в учнів. Що робити?</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 15</h3>
                                <p className="nameOfLeasson">Теорія для учнів. Подаємо впевнено</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 16</h3>
                                <p className="nameOfLeasson">Перше практичне заняття</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                        <li className="InstructorOnlineList" onClick={openLeasson}>
                            <article className="wrapperTitleLeasson">
                                <h3 className="titleLeasson">УРОК 17</h3>
                                <p className="nameOfLeasson">Підвищення кваліфікації</p>
                            </article>
                            <svg className="arrowRightToLeasson" width={32} height={32}><use xlinkHref={`${sprite}#icon-arrowRightNext`}></use></svg>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}