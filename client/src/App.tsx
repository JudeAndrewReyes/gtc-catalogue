import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Brands from './components/Brands';
import Header from './components/Header';
import BrandPage from './components/BrandPage';
import { QuoteFormProvider, useQuoteFormContext } from "./hooks/useQuoteForm.context";
import QuoteForm from './components/QuoteForm';
import Partnerships from './components/Partnerships';

function App() {

  return (
    <Router>
      <QuoteFormProvider>
      <div className='w-full overflow-hidden'>
        <Routes>
          {/* landing page with About, Brands */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Brands />
                <Partnerships />
              </>
            }
          />
          {/* Dynamic brand route */}
          <Route
          path='/:id'
          element={<BrandPage />}
          />
        </Routes>

        {/* Global modal always rendered, but hidden unless opened */}
        <QuoteFormWrapper />
      </div>
      </QuoteFormProvider>
    </Router>
  );
}

// This wrapper just hooks into context to show/hide the modal
function QuoteFormWrapper() {
  const { isOpen, close } = useQuoteFormContext();
  return <QuoteForm isOpen={isOpen} onClose={close} />;
}

export default App
