import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='forest'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/note/:id' element={<NoteDetail />} />
        <Route path='/create' element={<CreatePage />} />

      </Routes>
    </div>
  )
}

export default App
