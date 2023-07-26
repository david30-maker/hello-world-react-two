import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import Greeting from './components/Greeting.jsx';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
