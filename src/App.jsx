import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Create from './pages/Create';
import LearningUseState from './pages/LearningUseState';
import SinglePage from './pages/SinglePage';
import Edit from "./pages/Edit";
import Blog from './pages/Blog';


function App() {
   return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element ={<Home />} />
      <Route path='/about' element ={<About />} />
      <Route path='/edit/:id' element ={<Edit />} />
      <Route path='/blog' element ={<Blog />} />
      <Route path='/create' element ={<Create />} />
      <Route path='/learningusestate' element ={<LearningUseState />} />
      <Route path='/single/:id' element ={<SinglePage />} />
      
</Routes>
</BrowserRouter>
  )
  }
export default App
