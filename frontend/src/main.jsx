import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
<ToastContainer
  position="top-center"
  autoClose={3000}  // Set a reasonable auto-close time (3000ms = 3s)
  hideProgressBar={false}
  newestOnTop={true}  // Show newest toast at the top
  closeOnClick={true}
  rtl={false}
  pauseOnFocusLoss={false}  // Avoid pausing when user switches tabs
  draggable
  pauseOnHover
  theme="light"
/>
    <App />
  </StrictMode>,
)
