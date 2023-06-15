'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_de_cadastro, setData_de_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [img, setImg] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            data_de_cadastro: data_de_cadastro,
            preco: preco,
            descricao: descricao,
            img: img
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/cadastroproduto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="Date"
                    placeholder='Data de cadastro:'
                    nome="data_de_cadastro"
                    onChange={e => setData_de_cadastro(e.target.value)}
                /><br/>
                <input
                    type="Float"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                 <input
                    type="text"
                    placeholder='Descrição'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                 <input
                    type="text"
                    placeholder='Imagem do produto'
                    nome="img"
                    onChange={e => setImg(e.target.value)}
                /><br/>

                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}