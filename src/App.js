import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/nav';
import MainHead from './components/Home/mainhead';
import Projects from './pages/Projects/projects'
import MainButtons from './components/Home/mainbuttons';
import ErrorPage from './pages/ErrorHandling/error-handle'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Curiosities from './pages/Curiosities/curiosities';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/curiosities",
    element: <Curiosities />
  },
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
