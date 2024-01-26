import { NextFunction, Request, Response } from "express";
import Agenda from "../Models/AgendaModel";

type fnExpress = (req: Request, res: Response, next?: NextFunction) => void;

type HomeControllerProtocol<T> = {
  home: T;
  indexAppointment: T;
  newAppointment: T;
  consulterAppointment: T;
}

const HomeControlller: HomeControllerProtocol<fnExpress> = {
  home(req, res) {
    res.render('index');
  },

  indexAppointment(req, res) {
    res.render('create');
  },

  async newAppointment(req, res) {
    const body = req.body;
    res.json(body);

    const status = await Agenda.insert(body);

    console.log(status);
  },

  async consulterAppointment(req, res) {
    const response = await Agenda.AllAppointments(false);
    console.log(response)
    res.json(response);
  }
}

export default HomeControlller;