import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Create } from './pages/Create';
import { Join } from './pages/Join';
import { Group } from './pages/Group';
import { DocumentDetails } from './pages/DocumentDetails';
import { UploadDocument } from './pages/UploadDocument';
import { Admin } from './pages/Admin';
import { AdminRoles } from './pages/AdminRoles';
import { PrivateRoute } from './components/PrivateRoute';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          }/>

        <Route path="/create" element={
          <PrivateRoute>
            <Create />
          </PrivateRoute> 
          }/>
        
        <Route path="/join" element={
          <PrivateRoute>
            <Join />
          </PrivateRoute>
          }/>


        <Route path="/group" element={
          <PrivateRoute>
            <Group />
          </PrivateRoute>
          }/>
        
        <Route path="/group/admin" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>          
          }/>

        <Route path="/group/admin/roles" element={
          <PrivateRoute>
            <AdminRoles />
          </PrivateRoute>          
          }/>

        <Route path="/document/details" element={
          <PrivateRoute>
            <DocumentDetails />
          </PrivateRoute>          
          }/>

        <Route path="/document/upload" element={
          <PrivateRoute>
            <UploadDocument />
          </PrivateRoute>          
          }/>
      </Route>

    </Routes>
  )
}