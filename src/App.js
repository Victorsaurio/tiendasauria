import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className='App'>
      <ItemListContainer greeting={"Bienvenide a TiendasauriaP3"}/>
      <NavBar />
    </div>
  );
}

export default App;
