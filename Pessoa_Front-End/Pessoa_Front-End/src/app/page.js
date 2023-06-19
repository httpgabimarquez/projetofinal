"use client"
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> 
      <div class="topnav" id="myTopnav">

  <a><Link href="/cadastro" class="active" className='voltar'> Cadastre seu produto </Link></a>
  <a href="#contact">Contato</a>
  <a href="#about">Sobre nossa loja</a>
  </div>
    
 <section id="lista">
      {produtos.map(produto => (
        <div key={produto.codigo}>
          <section id="item1"> 
          <p>{produto.titulo}</p>
          <img src={produto.img} width={300} height={300}></img>

        <button>  <Link href={`/produto/${produto.codigo}`}>ver mais</Link></button> 
          </section>
        </div>
      ))}
      </section>
    </main>
  )
}