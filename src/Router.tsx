import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { HeaderDefaultLayout } from './layouts/HeaderDefaultLayout';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<HeaderDefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Route>
    </Routes>
  )
}