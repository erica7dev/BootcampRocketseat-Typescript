/*service só pode exportar única funcionalidade*/

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  email: string;
  name?: string; //? = opcional
  password: string;
  techs: Array<string | TechObject>; //string[] também é válido
}
//name = '',email: string, password: string
export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
