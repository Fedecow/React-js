import { Form } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='item' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
//   <div>
// <NavBar />
// <ItemListContainer greeting='Hola mundo'/>
//   </div>
  );
}

export default App;
