import { mongoose } from "../../database/connection";

export type BodyProtocol = {
  date: Date;
  time: string;
  cpf: string;
  describe?: string | null | undefined;
  name?: string | null | undefined;
  cpf?: string | null | undefined;
  finished?: boolean | null | undefined;
}

type AgendaProtocol<T> = {
  insert: (body: T) => Promise<mongoose.Document>
  AllAppointments: (appoFinished: boolean) => Promise<(Document<null, T>)[]> | AppoNotFinished[];
  IdAppointments: (id: string) => Promise<Document<T> | null>;
  finishAppointment: (id: string) => Promise<boolean>;
}
