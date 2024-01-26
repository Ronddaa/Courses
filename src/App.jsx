import './App.css';
import Main from './components/LoginPage';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage';
import InstructorOnline from './components/InstructorOnline'
import InstructorOnlineLeasson from './components/InstructorOnlineLeassons';

export default function App() {
  return (
    <div className="allWrapper">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Courses' element={<MainPage />} />
          <Route path='Courses/InstructorOnline' element={<InstructorOnline />} />
          <Route path='Courses/InstructorOnline/Leasson' element={<InstructorOnlineLeasson />} />
        </Routes>     
    </div>
  )
}

