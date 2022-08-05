interface BotaoProps{
    cor?: "green" | "blue" | "gray";
    children: any;
    className?: String
    onClick?: () => void

}

export default function Botao(props: BotaoProps) {

    const cor1 = props.cor ?? "gray";
    

    return (
        
        <button 
        
        onClick={props.onClick}
        className={`
        bg-${cor1}-400
        text-white px-4 py-2
        rounded-md

        ${props.className}

     `}>    
            {props.children}
        </button>
    )

}