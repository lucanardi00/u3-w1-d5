import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <MyMain />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
