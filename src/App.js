import './scss/App.scss';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import Countries from './components/Countries';
import Charts from './components/Charts';

function App() {
  return (
    <div className="App">
      <Header/>
      <InfoCards/>
      <Countries/>
      <Charts/>
    </div>
  );
}

export default App;
