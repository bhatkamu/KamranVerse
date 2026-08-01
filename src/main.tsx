import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Remove the static bootstrap loader once React has mounted
function removeBootstrapLoader() {
  const loader = document.getElementById('app-bootstrap-loader')
  if (loader) {
    loader.classList.add('hidden')
    window.setTimeout(() => {
      loader.remove()
    }, 350)
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// React 18 createRoot is synchronous for the initial render, so the loader can
// be removed right after. requestAnimationFrame ensures the DOM is painted.
requestAnimationFrame(() => {
  removeBootstrapLoader()
})