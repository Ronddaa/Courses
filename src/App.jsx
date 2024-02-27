import './App.css';
import Main from './components/LoginPage';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage';
import InstructorOnline from './components/InstructorOnline'
import {
  InstructorOnlineLeasson1,
  InstructorOnlineLeasson2,
  InstructorOnlineLeasson3,
  InstructorOnlineLeasson4,
  InstructorOnlineLeasson5,
  InstructorOnlineLeasson6,
  InstructorOnlineLeasson7,
  InstructorOnlineLeasson8,
  InstructorOnlineLeasson9,
  InstructorOnlineLeasson10,
  InstructorOnlineLeasson11,
  InstructorOnlineLeasson12,
  InstructorOnlineLeasson13,
  InstructorOnlineLeasson14,
  InstructorOnlineLeasson15,
  InstructorOnlineLeasson16,
  InstructorOnlineLeasson17,
}
  from './components/InstructorOnlineLeassons';
  import Error404 from './components/404';

export default function App() {
  return (
    <div className="allWrapper">
        <Routes>
          <Route path='/' element={<Main />} />
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

          <Route path='*' element={<Error404 />}/>
        </Routes>     
    </div>
  )
}


