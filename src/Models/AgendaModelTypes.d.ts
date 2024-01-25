import { mongoose } from "../../database/connection";

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
  AllAppointments: () => Promise<(Document<null, T>)[]>
  IdAppointments: (id: string) => Promise<Document<T> | null>
}
