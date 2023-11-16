import { Request, Response } from 'express';
import User from '../models/User';
export const home = async (req: Request, res: Response)=>{


    //remover usuário:
    //await User.findOneAndDelete({ email: 'vitalson_lorran95@ymail.com'})
    /*
    let newUser = new User()
    newUser.name = { firstName: 'Luiz', lastName: 'Felipe' }
    newUser.email = 'lp@hotmail.com'
    newUser.age = 24
    newUser.interests = [ 'praia', 'surf', 'games', 'programação']
    await newUser.save()
    */
   /*
    let newUser = new User()
    newUser.name = { firstName: req.body.name.firstName, lastName: req.body.name.lastName }
    newUser.email = req.body.email
    newUser.age = parseInt(req.body.age)
    newUser.interests = [ 'req.body.interests']
    let resultado = await newUser.save()*/


    let users = await User.find({}).sort({"name.firstName": 1}) //pegando todos os usuarios -> array de objetos

    //console.log(req.body)
    

    res.render('pages/home', {
      users  
    });
};