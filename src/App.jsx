import { useState } from 'react'
import data from './data.json'
import Header from './Header'
import ArtistCard from './ArtistCard'
import './App.css'

function App() {
  const entryElements = data.artists.map((entry) => {
    return (
      <ArtistCard
        key={entry.id}
        {...entry}
      />
    )
  })
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

export default App
