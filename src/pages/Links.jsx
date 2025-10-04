import React from 'react'

const links = [
  { id: 1, title: 'GitHub', url: 'https://github.com/devegoma' },
  { id: 2, title: 'X', url: 'https://x.com/devegoma' },
]

export default function Links() {
  return (
    <section>
      <h2>リンク集</h2>
      <ul>
        {links.map(l => (
          <li key={l.id}><a href={l.url} target="_blank" rel="noreferrer">{l.title}</a></li>
        ))}
      </ul>
    </section>
  )
}
