import { NextFunction, Request, Response } from "express";
import Agenda from "../Models/AgendaModel";
import AppointmentFactory from "../factories/AppointmentFactory";

type fnExpress = (req: Request, res: Response, next?: NextFunction) => void;

type HomeControllerProtocol<T> = {
  home: T;
  indexAppointment: T;
  newAppointment: T;
  consulterAppointment: T;
  eventAppointment: T;
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
    res.json(response);
  },

  async eventAppointment(req, res) {
    const resultEvent = await Agenda.IdAppointments(req.params.id);
    const formatEventWithdateTime = AppointmentFactory.buildDate(resultEvent);

    res.render('event', { event: formatEventWithdateTime } )
  }
}

export default HomeControlller;