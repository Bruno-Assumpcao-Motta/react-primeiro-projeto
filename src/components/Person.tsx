export const Person = () => {

    const name: string = 'Ayrton Senna'
    const avatar: string = 'https://www.tailorexec.com.br/wp-content/uploads/2024/03/horizon-chase-turbo-ayrton-senna-1024x576.jpg'

    return (
        <>
            <h1>{name}</h1>
            <img 
                src={avatar} 
                alt={name} 
                className="w-52"
            />
            <ul>
                <li>Piloto de Formula 1</li>
                <li>Empresário</li>
                <li>Filantropo</li>
            </ul>


        </> 
    )
}