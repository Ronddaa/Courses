import Header from "./Header";

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
              }),
            mode: 'cors'
        }).then(response => response.text())
        .then(text => {
            if (text=="true") {window.location.href = '/Courses'}
            else {
                console.log("wrong log");
                // сюди добав обробку помилки
            };
            
        })
        .catch(error => console.error(error));
  
        //document.getElementById("myForm").submit();
 
    }


    return (
        <div className="JustWrapper">
            <Header />
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