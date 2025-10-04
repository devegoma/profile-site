import React from 'react'
import services from '../data/services'

export default function Releases() {
  return (
    <section>
      <h2>リリース済みサービス一覧</h2>
      <p>以下は疑似的に追加したリリース済みサービスの一覧です。</p>
      <ul className="services">
        {services.map(s => (
          <li key={s.id} className="service">
            <h3>{s.name} <small>({s.year})</small></h3>
            <p>{s.description}</p>
            <p><a href={s.url} target="_blank" rel="noreferrer">サービスを見る</a></p>
          </li>
        ))}
      </ul>
    </section>
  )
}
