import axios from "axios";
import Link from 'next/link'
import { GetServerSideProps, NextPage } from "next";
import { http } from "../../util/http";

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

const UsersPage: NextPage<UsersPageProps> = (props) => {
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

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async () => {

    const {data} = await http.get('api/users')

    return {
        props: {
            users: data
        }
    }
} 