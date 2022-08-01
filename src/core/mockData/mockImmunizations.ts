import { Immunization } from '../models/Immunization';

export const MockImmunizations = new Map<string, Immunization>([
  [
    'tetanol-pur1',
    {
      id: 'tetanol-pur1',
      status: 'completed',
      vaccineCode: {
        id: '2.16.840.1.113883.4.642.3.375',
        coding: 'SNOMEDCTMedicationCodes',
        text: 'tetanol-pur',
      },
      occurrenceTime: new Date(new Date().setFullYear(1998, 3, 1)),
      occurrence: '2 months after birth',
      primarySource: true,
      lotNumber: 'ABCDEF',
      patientId: 'patient1',
      performerId: 'practitioner1',
      vaccinationDoseId: 'tetanol-pur1',
    },
  ],
  [
    'tetanol-pur2',
    {
      id: 'tetanol-pur2',
      status: 'completed',
      vaccineCode: {
        id: '2.16.840.1.113883.4.642.3.375',
        coding: 'SNOMEDCTMedicationCodes',
        text: 'tetanol-pur',
      },
      occurrenceTime: new Date(new Date().setFullYear(1998, 4, 1)),
      occurrence: '2 months after birth',
      primarySource: true,
      lotNumber: 'ABCDEF',
      patientId: 'patient1',
      performerId: 'practitioner1',
      vaccinationDoseId: 'tetanol-pur2',
    },
  ],
  [
    'tetanol-pur3',
    {
      id: 'tetanol-pur3',
      status: 'completed',
      vaccineCode: {
        id: '2.16.840.1.113883.4.642.3.375',
        coding: 'SNOMEDCTMedicationCodes',
        text: 'tetanol-pur',
      },
      occurrenceTime: new Date(new Date().setFullYear(1998, 5, 1)),
      occurrence: '2 months after birth',
      primarySource: true,
      lotNumber: 'ABCDEF',
      patientId: 'patient1',
      performerId: 'practitioner1',
      vaccinationDoseId: 'tetanol-pur3',
    },
  ],
  [
    'dukoral1',
    {
      id: 'dukoral1',
      status: 'completed',
      vaccineCode: {
        id: '2.16.840.1.113883.4.642.3.375',
        coding: 'SNOMEDCTMedicationCodes',
        text: 'dukoral',
      },
      occurrenceTime: new Date(),
      occurrence: '',
      primarySource: true,
      lotNumber: 'ABCDEF',
      patientId: 'patient1',
      performerId: 'practitioner1',
      vaccinationDoseId: 'dukoral1',
    },
  ],
]);
