import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Layout from './components/Layout';
import './App.css';


function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
  );
}

export default App;

