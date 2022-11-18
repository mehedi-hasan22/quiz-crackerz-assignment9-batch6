import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import TopicsDetails from './Components/TopicsDetails/TopicsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [{
        path: '/topics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
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
      },
      {
        path: '/topics/:topicsId',
        loader: async ({ params }) => {
          // console.log(params.topicsId)
          // return fetch(`https://openapi.programming-hero.com/api/${params.topicsId}`)
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
        },
        element: <TopicsDetails></TopicsDetails>
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
