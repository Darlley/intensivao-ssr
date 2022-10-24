import Link from "next/link";

export async function getStaticPaths () {
    return {
        paths: [
            {
                params: {
                    id: '1'
                },
            },
            {
                params: {
                    id: '2'
                },
            }
        ],
        fallback: false
    }
}

export async function getStaticProps (context: any) {
    const id = context.params.id
    return {
        props: {
            id: id
        }
    }
}

const User = (props: any) => {

    return (
        <div>
            <h1>Usuário #{props.id}</h1>
            <Link href="/users">
                <a>Criar novo</a>
            </Link>
        </div>
    );
}

export default User;  