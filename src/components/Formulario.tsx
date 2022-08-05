import Entrada from './Entrada';
import Cliente from '../core/cliente';
import { useState } from 'react';
import Botao from './Botao';

interface formularioProps {
    cliente: Cliente;
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}    

export default function Formulario(props: formularioProps) {

    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>

            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura className="mb-4" />
            
            ) : false}
            <Entrada texto="Nome" 
            valor={nome} 
            valorMudou={setNome}
            className="mb-4"
            />
            <Entrada texto="Idade" tipo="number" valor={idade} 
            valorMudou={setIdade}
            />

            <div className='mt-7 flex justify-end'>

                <Botao cor="green" 
                className='mr-2'
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                
                <Botao cor="green" onClick={props.cancelado}>Cancelar</Botao>
            </div>

            
        </div>
    )
}