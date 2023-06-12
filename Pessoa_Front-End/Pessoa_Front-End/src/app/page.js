"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produto => (
        <div key={produto.codigo}>
          <p>{produto.titulo}</p>
          <Link href={`/produto/${produto.codigo}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}