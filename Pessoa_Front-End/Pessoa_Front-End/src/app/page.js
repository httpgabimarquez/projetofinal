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
      <div class="sidebar">
        <a><Link href="/cadastro" class="active" className='voltar'> Cadastrar seu produto </Link></a>
        <a href="#news">Novos produtos</a>
        <a href="#contact">Fale Conosco</a>
        <a href="#about">Sobre</a>
      </div>

      <section id="lista">
        {produtos.map(produto => (
          <div key={produto.codigo}>
            <section id="item1">
            <br/><br/>
              <b>{produto.titulo}</b>
              <br/><br/><br/>
              <img src={produto.img} width={300} height={300}></img>
              <p> {produto.data_de_cadastro}</p>
              <p>{produto.preco}</p>
              <p>{produto.descricao}</p>
              <br/><br/>
              <button>  <Link href={`/produto/${produto.codigo}`}>Ver mais</Link> </button>
              <br/><br/><br/><br/>
            </section>
          </div>
        ))}
      </section>
    </main>
  )
}