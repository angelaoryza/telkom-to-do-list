import DetailApp from './pages/taskDetail';
import MainPage from './pages/mainPage';
import CategoryTask from './pages/categoryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

        <Router>
                <Routes>
                  <Route path="/" element={<MainPage/>}/>
                </Routes>
                <Routes>
                    <Route path="details/:id" element={<DetailApp/>} />
                </Routes>
                <Routes>
                    <Route path="category/:cat" element={<CategoryTask/>} />
                </Routes>
        </Router>
    </div>

  );
}

export default App;
