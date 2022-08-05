interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray';
    children: any;
    className?: String

}

export default function Botao(props: BotaoProps) {


    return (
        
        <button className={`
        bg-green-500
        text-white px-4 py-2
        rounded-md

        ${props.className}

     `}>
            {props.children}
        </button>
    )

}