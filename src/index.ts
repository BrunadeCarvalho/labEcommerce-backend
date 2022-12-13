import express from "express"
import cors from 'cors'
import { AddressInfo } from "net"
import listaDeUsuarios from "./endpoint/listaDeUsuarios"
import dotenv from "dotenv"
import criarUsuario from "./endpoint/criarUsuario."
import listarProdutos from "./endpoint/listaDeProdutos"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

// Listando os usuários:
app.get("/users", listaDeUsuarios);

// criando um novo usuário:
app.post("/users", criarUsuario);

//listando os produtos:
app.get("/products", listarProdutos);

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
});