import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/Shared/ScrollToTop'
import Home from './pages/Home'
import HireMe from './pages/HireMe'
import Work from './pages/Work'
import GetInTouch from './pages/GetInTouch'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </>
  )
}

export default App
