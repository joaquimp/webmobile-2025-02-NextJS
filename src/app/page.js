'use client'

import { useState } from "react";


export default function Home() {
  return (
    <main>
      <h1>Meu site</h1>
      <Contador /><Contador /><Contador /><Contador /><Contador />
    </main>
  );
}

function Contador() {
  const [valor, setValor] = useState(0);
  return (
    <section>
      <div>Valor: {valor}</div>
      <button onClick={() => {setValor(valor+1)}}>+</button>
    </section>
  )
}