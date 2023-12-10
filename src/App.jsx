import styles from './App.module.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// rotas
import Home from './routes/Home/index';
import Header from './components/header/index';
import Favorites from './routes/Favorites';
import Navbar from './components/nav-bar';
import Footer from './components/footer/index';
import Iot from './routes/Iot/index';

// paginas

// Constante das rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorite",
    element: <Favorites />,
  },
    {
    path: "/temperatura",
    element: <Iot />,
  },


]);

function App() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
