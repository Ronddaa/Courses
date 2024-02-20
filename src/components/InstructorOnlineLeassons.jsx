import Header from "./Header";
import '../css/InstructorOnlineLeasson.css'

const leassonDB = [
    {
        leassonTitle1: 'УРОК №1: знайомство зі мною',
        videoURL1: 'https://www.youtube.com/embed/Hc7Ctjbi3_8?si=CNbeCph_vVH8JqPO',
    },
    {
        
    }
]

export default function InstructorOnlineLeasson() {
    return(
        <div className="JustWrapper">
            <Header /> 
            <section className="instructorOnlineLeasson">
                <div className="container wrapperinstructorOnlineLeasson">
                    <h2 className="titleInstructorOnlineLeasson">{leassonDB[0].leassonTitle1}</h2>
                    <iframe className="leasson" width={1158} height={554} src={leassonDB[0].videoURL1} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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