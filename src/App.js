import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer iden={4} />
    </div>
  );
}

export default App;
