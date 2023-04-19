import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailcontainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <NavBar />    
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailcontainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>  
      <ItemListContainer greeting={"Bienvenide a TiendasauriaP3"}/>
      <ItemDetailcontainer />
    </div>
  );
}

export default App;
