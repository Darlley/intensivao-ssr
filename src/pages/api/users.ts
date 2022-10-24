import { http } from './../../util/http';
import axios from 'axios';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const urlRequest = "https://my-json-server.typicode.com/Darlley/intensivao-ssr/users"

type Data = {
  name: string
}

type ResponseData = {
  _id?: string,
  index?: number,
  picture?: string,
  age?: number,
  name?: string,
  company?: string,
  email?: string,
  phone?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
  const {data} = await http.get(urlRequest)
  res.status(200).json(data)
}
