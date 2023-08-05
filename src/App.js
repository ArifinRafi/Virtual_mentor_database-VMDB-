import './App.css';
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Signup from './pages/Signup';
import Home from './pages/Home'
import Search from './pages/Search';
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter([
    {path:'/Login', element: <Login></Login>},
    {path:'/Signup', element: <Signup></Signup>},
    {path:'/', element: <Home></Home>},
    {path:'/Home', element: <Home></Home>},
    {path:'/Search', element: <Search></Search>},
    {path:'/Profile', element: <Profile></Profile>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
