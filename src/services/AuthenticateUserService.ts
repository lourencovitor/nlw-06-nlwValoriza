import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticationRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticationRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // verificar se email existe
    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }
    // verificar se senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    // gerar token
    const token = sign(
      {
        email: user.email,
      },
      process.env.HASH_KEY,
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}

export { AuthenticateUserService };
