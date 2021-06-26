import { Request, Response } from "express";

class Health {
  async handle(request: Request, response: Response) {
    return response.json({ message: "Api running" });
  }
}

export { Health };
