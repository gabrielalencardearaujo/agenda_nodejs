import { NextFunction, Request, Response } from "express";
import Agenda from "../Models/AgendaModel";

type fnExpress = (req: Request, res: Response, next?: NextFunction) => void;

type HomeControllerProtocol<T> = {
  home: T;
  newConsulter: T;
  indexAppointment: T;
}

const HomeControlller: HomeControllerProtocol<fnExpress> = {
  home(req, res) {
    res.send('Hello World!!!');
  },

  indexAppointment(req, res) {
    res.render('create');
  },

  newConsulter(req, res) {
    const body = req.body;
    
    res.json(body);

    Agenda.insert(body).then(resp => {
      console.log(resp)
    });
  }
}

export default HomeControlller;