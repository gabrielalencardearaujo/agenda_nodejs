import { NextFunction, Request, Response } from "express";

type fnExpress = (req: Request, res: Response, next?: NextFunction) => void;

type HomeControllerProtocol<T> = {
  home: T;
  login: T;
}

const HomeControlller: HomeControllerProtocol<fnExpress> = {
  async home(req, res) {
    res.send('Hello World!!!');
  },

  async login(req,res) {
    res.send('Hello World');
  }
}

export default HomeControlller;