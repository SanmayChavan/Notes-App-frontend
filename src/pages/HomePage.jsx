import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'

const HomePage = () => {

    const [notes, setNotes] = useState([])
  

    const fetchNotes = async () => {
        try {
            const res = await api.get("/notes")
            setNotes(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div>
              {notes.length ===0 && <NotesNotFound/>}

                {notes.length > 0 && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                        {notes.map((note) => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
