import { mongoose } from "./connection";

type BodyProtocol = {
  date: Date;
  middlename: string;
  age: number;
  phoneNumber: number;
  email: string;
  name?: string | null | undefined;
}

type AgendaProtocol<T> = {
  insert: (body: T) => Promise<mongoose.Document>
}

const AgendaSchema = new mongoose.Schema({
  name: { type: String, require: true },
  middlename: { type: String, required: true },
  age: { type: Number, require: false, default: -1 },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const AgendaModel = mongoose.model('Agenda', AgendaSchema);

const Agenda: AgendaProtocol<BodyProtocol> = {
  async insert(body: BodyProtocol) {
    return await AgendaModel.create(body)
  }
}

export default Agenda;