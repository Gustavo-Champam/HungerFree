import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import "./App.css";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";
import Dashboard from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Logins";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Components/Protected";
import DashUsers from "./Dashboard/DashUsers";
import DashPosts from "./Dashboard/DashPosts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,  // Página principal com informações sobre a fome nas escolas
    },
    {
      path: "/about",
      element: <About />,  // Página com dados sobre a fome nas escolas e como combater
    },
    {
      path: "/contact",
      element: <Contact />,  // Página de contato para incentivar ações, como doações ou voluntariado
    },
    {
      path: "/reviews",
      element: <Reviews />,  // Página com depoimentos de pessoas sobre o impacto da fome nas escolas
    },
    {
      path: "/login",
      element: <LoginPage />,  // Página de login para administradores ou usuários
    },
    {
      path: "/dashboard",  // Página do painel (somente acessível por usuários autenticados)
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "/dashboard/users",  // Seção de usuários no painel
      element: (
        <Protected>
          <DashUsers />
        </Protected>
      ),
    },
    {
      path: "/dashboard/posts",  // Seção de postagens relacionadas à fome nas escolas
      element: (
        <Protected>
          <DashPosts />
        </Protected>
      ),
    },
  ]);

  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

export default App;
