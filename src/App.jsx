
import './App.css'
import { CustombookingContext } from './context/bookingContext.jsx'
import { CustomFilterSearchContext } from './context/filterSearchContext.jsx'
import Home from './pages/Home/Home.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeConext.jsx';


function App() {

  return (
    <>
      <CustombookingContext>
        <CustomFilterSearchContext>
          <ThemeProvider>
            <div>
              <Home />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
              />

            </div>
          </ThemeProvider>
        </CustomFilterSearchContext>
      </CustombookingContext>
    </>
  )
}

export default App
