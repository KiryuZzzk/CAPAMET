import './App.css';
import Menu from "./components/Menu/Menu";
import Menusm from "./components/Menu/Menusm";
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Diplomados from './pages/Diplomados';
import Contact from './pages/Contact';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';



function App() {

  const [page, setPage] = useState("Home");
  const matches1120 = useMediaQuery('(min-width:1120px)');


  return <div>
    {
    matches1120 ? <Menu setPage={setPage} page={page}/> : <Menusm setPage={setPage} page={page} />
    }
    {
      (page === "Home") && <Home setPage={setPage} page={page}/>
    }
    {
      (page === "Courses") && <Courses setPage={setPage} page={page}/>
    }
    {
      (page === "Diplomados") && <Diplomados setPage={setPage} page={page}/>
    }
    {
      (page === "Contact") && <Contact setPage={setPage} page={page}/>
    }
    <Footer/>


</div>
}

export default App;
