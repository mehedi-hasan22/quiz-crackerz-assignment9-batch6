import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [{
        path: '/topics',
        element: <Topics></Topics>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '*',
        element: <div>
          <h1>oppss!!</h1>
          <h3>Route isn't defined. try again</h3>
          <h6>Error Code:404</h6>
        </div>
      }],
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
