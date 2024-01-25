import { NextFunction, Request, Response } from "express";

type fnExpress = (req: Request, res: Response, next?: NextFunction) => void;

type HomeControllerProtocol<T> = {
  home: T;
  newConsulter: T;
}

const HomeControlller: HomeControllerProtocol<fnExpress> = {
  home(req, res) {
    res.send('Hello World!!!');
  },

  newConsulter(req,res) {
    res.render('create');
  }
}

export default HomeControlller;