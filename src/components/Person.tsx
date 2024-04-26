const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];
}
export const Person = (props: Props) => {
    const data = {
        name: 'Ayrton Senna',
        avatar: 'https://www.tailorexec.com.br/wp-content/uploads/2024/03/horizon-chase-turbo-ayrton-senna-1024x576.jpg',
        roles: ['Piloto de Formula 1', 'Empresário', 'Filantropo']
    }

    const today: Date = new Date();

    return (
        <>
            <h1>{data.name} - {getWeekday(today)}</h1>
            <img 
                src={data.avatar} 
                alt={data.name} 
                className="w-52"
            />
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
                <li>{data.roles[2]}</li>
            </ul>


        </> 
    )
}