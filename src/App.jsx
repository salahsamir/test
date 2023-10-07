
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import { CountetContextProvider } from './Context/Counter.js';

function App() {
  const Routes=createBrowserRouter([{path: '/', element:<Layout/>,children:[
{index:true,element:<Home/>},
{path:"about",element:<About/>},
  ]}])
  return (
  <CountetContextProvider>
     <RouterProvider router={Routes}></RouterProvider>
  </CountetContextProvider>
  );
}

export default App;
