import {useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

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
            <a href="/users/create">Criar novo</a>
        </div>
    );
}

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async () => {

    const {data} = await axios.get("http://localhost:3333/db.json")

    return {
        props: {
            users: data.users
        }
    }
} 