import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Content from './components/Content.jsx'
import Contact from './components/Contact.jsx'
import AllPosts from './components/AllPosts.jsx'
import Details from './components/Details.jsx'




const router = createBrowserRouter([
  {
    path : '/' , Component : App,
    children : [
     { index : true , Component : Home},
     { path : 'about' ,Component : About },
     { path : 'blog' , Component : Content ,
      children : [
        {index : true ,
         Component : AllPosts,
         loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        },
        {
          path : 'details/:postId',
          Component : Details,
          loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        
          
         
        }
      ]
     },
     { path : 'contact' , Component : Contact}
    ]
  },

  {
    path : '*',
    element : <h1>oppos 404 Page not found</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
