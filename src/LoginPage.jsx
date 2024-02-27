import mainLogo from './assets/mainLogo.svg';
import sprite from './assets/icons.svg';


export default function Main() {
    const handleSubmit = (e) => {
        e.preventDefault();
        let login = document.getElementById('InputLogInID').value;
        let password = document.getElementById('InputPassID').value;
        fetch('http://localhost:3000/login', {
            method: "POST",
            body:  JSON.stringify({ 
                "name": login,
                "pass" : password
              })
        }).then(response => response.text())
        .then(text => {
            if (text=="true") {console.log('true'); 
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
                    <img src={mainLogo} alt="Logo" />
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