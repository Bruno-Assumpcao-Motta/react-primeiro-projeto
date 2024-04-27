type Props = {
    name: string;
    avatar: string;
    roles: string[];
}
export const Person = ({ name, avatar, roles }: Props) => {

    return (
        <>
            <div className="p-5">
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
            </div>

        </> 
    )
}