import Main from './components/Main';
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import SubContent from './components/SubContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-secondary m-4 p-4">
      <Header/>
      <div className="col-12 my-4 d-flex justify-content-between">
        <Navigation />
        <Main>
          <div className="d-flex">
            <SubContent />
            <SubContent />
            <SubContent />
          </div>
            <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
