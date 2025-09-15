import About from './components/About';
import Brands from './components/Brands';
import Header from './components/Header';

function App() {

  return (
    <>
      <div className='w-full overflow-hidden'>
        <Header />
        <About />
        <Brands />
      </div>
    </>
  )
}

export default App
