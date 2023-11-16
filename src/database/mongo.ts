import { connect, ConnectOptions } from "mongoose"
import dotenv from 'dotenv'

export const mongoConnect =async () => {
    try {
        console.log("Conectadno ao MongoDB...")
        await connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }as ConnectOptions)
        console.log('Mongo conectado com sucesso')
    } catch (error) {
        console.log("Erro: ", error)
    }
}