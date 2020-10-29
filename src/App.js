import Main from './components/Main';
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import SubContent from './components/SubContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-secondary p-2">
      <Header/>
      <div className="col-12 my-2 d-flex justify-content-around">
        <Navigation />
        <Main>
            <SubContent />
            <SubContent />
            <SubContent />
            <Advertisement />
        </Main>
        </div>
    </div>
  );
}

export default App;
