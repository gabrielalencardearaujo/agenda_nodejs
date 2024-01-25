import { mongoose } from "../../database/connection";
import { AgendaProtocol, BodyProtocol } from "./AgendaModelTypes";

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  cpf: { type: String, required: false, default: '' },
  describe: { type: String, require: false, default: '' },
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
    else return await AppointmentModel.find({ 'finished': false });
  },

  async IdAppointments(_id) {
    return await AppointmentModel.findOne({ '_id': _id })

  }
}

export default Agenda;