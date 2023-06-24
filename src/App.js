import './App.css';
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  const router = createBrowserRouter([
    {path:'/Login', element: <Login></Login>},
    {path:'/Signup', element: <Signup></Signup>},
    {path:'/Navbar', element: <Navbar></Navbar>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
