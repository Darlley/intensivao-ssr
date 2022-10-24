import { NextPage, GetServerSideProps } from "next"
import bodyParser from "body-parser"
import util from "util"
import { FormEvent } from "react"
import axios from "axios"

const getBody = util.promisify(bodyParser.urlencoded())

type EmailPropsType = {
  name?: string,
  assunto?: string
}

const EmailPage: NextPage<EmailPropsType> = (props) => {
  
  async function onSubmit(event: FormEvent){
    event.preventDefault();
    axios.post("/api/email", {
      assunto: (document.getElementById("assunto") as HTMLInputElement).value,
      content: (document.getElementById("content") as HTMLTextAreaElement).value
    })
  }

  return (
    <div>
      <h1>Formulário de contato | {props.name}</h1>

      <form onSubmit={onSubmit} method="POST">
          <input type="text" name="assunto" id="assunto" />
          <textarea name="content" id="content" />
          <button type="submit">Enviar</button>
      </form>

      {/* <form action="/email" method="POST">
          <input type="text" name="assunto" id="assunto" />
          <textarea name="content" id="content" />
          <button type="submit">Enviar</button>
      </form> */}
    </div>
  )
}

export default EmailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const {req, res} = context;
  // if(req.method === "POST"){
  //   await getBody(req, res);
  // }
  return {
    props: {
      name: "Darlley"
    }
  }
}