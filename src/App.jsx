import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/home';
import EnglishLanguageTestsPage from './pages/EnglishLanguageTests/EnglishLanguageTests';
import { StudyAbroadCountryPage, StudyAbroadPage } from './pages/StudyAbroad/StudyAbroad';

const RouteScrollReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <RouteScrollReset />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/english-language-tests" element={<EnglishLanguageTestsPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
        <Route path="/study-abroad/:countrySlug" element={<StudyAbroadCountryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
