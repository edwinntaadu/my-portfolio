import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import AppLayout from "./components/layout/AppLayout";
import PageLoader from "./components/common/PageLoader";
import ScrollToHash from "./components/common/ScrollToHash";
import usePageLoader from "./hooks/usePageLoader";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const loading = usePageLoader();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <ScrollToHash />

      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
