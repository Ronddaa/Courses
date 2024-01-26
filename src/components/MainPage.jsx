import Header from "./Header";
import InstructorOnlineIMG from '../img/coursesInstructorOnline.webp';

export default function MainPage() {
    
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
                            <img src={InstructorOnlineIMG} alt="Instructor Online" className="frstCoursesIMG" width={260} height={280} />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}