import './App.css';
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Signup from './pages/Signup';
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {path:'/Login', element: <Login></Login>},
    {path:'/Signup', element: <Signup></Signup>},
    {path:'/Home', element: <Home></Home>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
