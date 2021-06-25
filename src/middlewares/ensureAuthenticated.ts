import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;
  // validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // validar se token é válido
    const { sub } = verify(
      token,
      "69f5689a42ae2058f16479bdcaf3b4ee"
    ) as IPayload;

    // recuperar informações do usuario
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
