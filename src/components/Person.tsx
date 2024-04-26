const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];
}
export const Person = ({ name, avatar, roles }: Props) => {

    return (
        <>
            <h1>{name}</h1>
            <img 
                src={avatar} 
                alt={name} 
                className="w-52"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>


        </> 
    )
}