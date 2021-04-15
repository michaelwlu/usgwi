import Map from './containers/Map';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='row'>
        <div className='search-form col-md-4'>
          <SearchForm />
        </div>
        <Map />
      </div>
    </div>
  );
}

export default App;
