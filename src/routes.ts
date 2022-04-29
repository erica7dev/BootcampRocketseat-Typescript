//tipos 
import { Request, Response } from "express";
import createUser from "../services/CreateUser";

//string, number, boolean, Array
//Interfaces

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'erica@teste.com',
    password: '123456',
    techs: ['TypeScript',
    'JavaScript', 
    'React',
    {title: 'JavaScript', experience: 190}
  ],
  });

  console.log(user.email);

  return res.json({ message: "Hello, World" });
}
