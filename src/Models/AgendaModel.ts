import { mongoose } from "../../database/connection";
import { AgendaProtocol, BodyProtocol } from "./AgendaModelTypes";

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  cpf: { type: String, required: false, default: '' },
  describe: { type: String, require: false, default: '' },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  finished: { type: Boolean, required: true }
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

const Agenda: AgendaProtocol<BodyProtocol> = {
  async insert(body: BodyProtocol) {
    return await AppointmentModel.create(body)
  }
}

export default Agenda;