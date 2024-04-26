import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-lg">Estudando componentes</h1>
      <h3>Mais algum texto</h3>
      <Person
        name="Ayrton Senna"
        avatar="https://www.tailorexec.com.br/wp-content/uploads/2024/03/horizon-chase-turbo-ayrton-senna-1024x576.jpg"
        roles={['Piloto de Formula 1', 'Empresário', 'Filantropo']}
      />
      <Person
        name="Jeff Bezos"
        avatar="https://s2-g1.glbimg.com/vUZszocJiRyhU0Dhlvi5UbAWVtE=/0x0:4092x2845/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/8/O/CSjd0zQ8ixeCeupMNhAA/ap21146648380360.jpg"
        roles={['CEO da Amazon', 'CEO da Blue Origin']}
      />
    </div>
  );
}

export default Page;