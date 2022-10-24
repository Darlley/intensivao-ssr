import axios from "axios";
import Link from 'next/link'
import { GetStaticProps, NextPage } from "next";
import { http } from "../../util/http";

const urlRequest = "https://my-json-server.typicode.com/Darlley/intensivao-ssr/users"

type UserTypes = {
    _id?: string,
    index?: number,
    picture?: string,
    age?: number,
    name?: string,
    company?: string,
    email?: string,
    phone?: string
}

type UsersPageProps = {
    users?: UserTypes[]
}

const UsersStaticPage: NextPage<UsersPageProps> = (props) => {
    const {users} = props;

    return (
        <div>
            <h1>Listar Usuários</h1>
            <ul>
                {
                    users?.map((user, key) => {
                        return <li key={key}>{user.name}</li>
                    })
                }
            </ul>
            <Link href="/users/create">
                <a>Criar novo</a>
            </Link>
        </div>
    );
}

export default UsersStaticPage;

export const getStaticProps: GetStaticProps = async () => {

    const {data} = await http.get(urlRequest)

    return {
        props: {
            users: data
        },
        revalidate: 10
    }
} 