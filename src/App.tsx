import Home from './pages/Home';
import NotFound from './components/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { useRouteValidation } from './hooks';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isValidRoute } = useRouteValidation();

  if (!isValidRoute) {
    return <NotFound />;
  }

  return <Home />;
}

export default App;
