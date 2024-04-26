const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];
}
export const Person = (props: Props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <img 
                src={props.avatar} 
                alt={props.name} 
                className="w-52"
            />
            <ul>
                <li>{props.roles[0]}</li>
                <li>{props.roles[1]}</li>
                <li>{props.roles[2]}</li>
            </ul>


        </> 
    )
}