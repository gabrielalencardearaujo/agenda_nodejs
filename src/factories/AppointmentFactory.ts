import mongoose from "mongoose";
import { BodyProtocol } from "../Models/AgendaModelTypes";

export type returnBuildDate = { id: string, title: string, start: Date, end: Date }

type ApointmentFactoryProtocol<T> = {
  buildDate: (simpleAppo: mongoose.Document<unknown, T>) => returnBuildDate
}

class ApointmentFactory implements ApointmentFactoryProtocol<BodyProtocol> {
  buildDate(simpleAppo) {
    const { date, _id, name, describe, time } = simpleAppo;

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + 1;
    const [hour, minutes] = time.split(':')

    const startDate = new Date(year, month, day, +hour, +minutes, 0, 0);
    const endDate = new Date(year, month, day, +hour + 1, +minutes, 0, 0);

    const appo = {
      id: _id,
      title: `${name} - ${describe}`,
      start: startDate,
      end: endDate,
    }

    return appo;
  }
}

export default new ApointmentFactory;