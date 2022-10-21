import { useRouter } from "next/router";

const User = () => {

    const {
        id: idRouteQuery, 
        name: nameRouteQuery
    } = useRouter().query

    return (
        <div>
            <h1>Usuário #{idRouteQuery} {nameRouteQuery}</h1>
            <a href="/users">Voltar</a>
        </div>
    );
}

export default User;