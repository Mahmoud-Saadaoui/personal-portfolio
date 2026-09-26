import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "./components/common/Loading";
import MainLayout from "./layouts/MainLayout";

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
    document.title = t("brand.name");
  }, [i18n.language, t]);

  return (
    <Suspense fallback={<Loading fullScreen />}>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
