import { mongoose } from "../../database/connection";
import AppointmentFactory, { returnBuildDate } from "../factories/AppointmentFactory";
import { AgendaProtocol, BodyProtocol } from "./AgendaModelTypes";

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  cpf: { type: String, required: false, default: '' },
  describe: { type: String, require: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  finished: { type: Boolean, required: false, default: false }
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

const Agenda: AgendaProtocol<BodyProtocol> = {
  async insert(body: BodyProtocol) {
    return await AppointmentModel.create(body)
  },

  async AllAppointments(appoFinished) {
    if (appoFinished) return await AppointmentModel.find({ 'finished': true })
    else {
      const appointments = await AppointmentModel.find({ 'finished': false });
      const appo: returnBuildDate[] = [];

      appointments.forEach(a => {
        appo.push(AppointmentFactory.buildDate(a));
      })
      return appo;
    }
  },

  async IdAppointments(_id) {
    try {
      return await AppointmentModel.findOne({ '_id': _id })
    }
    catch (err) { console.log(err) }
  },

  async finishAppointment(id) {
    try{
      await AppointmentModel.findByIdAndUpdate(id, { finished: true })
      return true;
    } catch(err) {
      console.log(err)
      return false;
    }
  }
}

export default Agenda;