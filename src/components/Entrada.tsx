interface EntradaProps {
    texto: string;
    tipo?: string;
    valor: any;
    somenteLeitura?: boolean;
    valorMudou?:(valor: any) => void;
    className?: string;
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor="" className="mb-2 mt-1">
                {props.texto}
            </label>
            <input 
            onChange={e => props.valorMudou?.(e.target.value)}
            type={props.tipo ?? 'text'} 
            value={props.valor}
            readOnly={props.somenteLeitura}
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-slate-100
                ${props.somenteLeitura ? '' : 'focus:bg-white'}
                px-4 py-2
            `}
            />

        </div>
    )
}