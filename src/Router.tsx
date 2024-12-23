import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Create } from './pages/Create';
import { Join } from './pages/Join';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/join" element={<Join />}/>
      </Route>
      
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  )
}