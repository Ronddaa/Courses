import Header from "./Header";
import '../css/InstructorOnlineLeasson.css'

export default function InstructorOnlineLeasson1() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">УРОК №1: знайомство зі мною</h2>
                    <iframe className="leasson" width={1158} height={554} src="https://www.youtube.com/embed/Hc7Ctjbi3_8?si=CNbeCph_vVH8JqPO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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