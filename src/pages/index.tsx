
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/cliente';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import { useState } from 'react';


export default function Home() {


  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela');

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }


  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {

    console.log(cliente.nome);

  }

  function clienteExcluido(cliente: Cliente) {

    console.log('Excluido: ' + cliente.nome);

  }

  return (
    <div className={`
    
    flex h-screen justify-center items-center
    bg-gradient-to-r from-slate-400 to-purple-400
    text-white

    `}>
     
     <Layout titulo='Cadastro Simples'> 
      
        {visivel === 'tabela' ? (

          
          <><div className='flex justify-end'>
            <Botao cor="green" className='mb-4' onClick={() => setVisivel('formulario')}>Novo Cliente</Botao>
          </div><Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          
          </>

        ) : (

          <Formulario cliente={clientes[0]}
          cancelado={() => setVisivel('tabela')} 
          clienteMudou={salvarCliente}/> 

        )}
        
        
          
      
     </Layout>
     
    </div>
  )
}
