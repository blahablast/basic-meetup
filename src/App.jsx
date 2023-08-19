import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'

function App() {
  return (
    // add Layout here in place of the fragment
    <Layout>
      <Routes>
        <Route path='/' element={<NewMeetupPage />} />
        <Route path='/new-meetup' element={<AllMeetupsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
