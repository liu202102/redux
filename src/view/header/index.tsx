import React from 'react'

function Content ( props: any ) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  )
}

export default Content
