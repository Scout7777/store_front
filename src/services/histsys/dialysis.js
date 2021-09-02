import { request } from 'umi';
import { toSearchPayload } from './utils';
import technicalPosition from './static_files/user_technical_position';

export async function searchPatient(payload) {
  // console.log(payload);
  // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
  return request(`/api/patients/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: toSearchPayload(payload),
  }).then((response) => {
    return {
      data: response.data.content || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function processes(payload) {
  // console.log(payload);
  // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
  return request(`/api/dialysis/page`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: toSearchPayload(payload),
  }).then((response) => {
    return {
      data: response.data || [],
      success: true,
      total: response.data.length || 0,
    };
  });
}

export async function createAdmission(patientId, values) {
  return request(`/api/dialysis/${patientId}/admission`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createProcess(patientId, aId) {
  return request(`/api/dialysis/${patientId}/process/${aId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getProcessLast(patientId) {
  return request(`/api/dialysis/${patientId}/last/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getProcess(patientId) {
  return request(`/api/dialysis/${patientId}/process`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function updatePre(processId, values) {
  return request(`/api/dialysis/${processId}/pre-assessment`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updatePun(processId, values) {
  return request(`/api/dialysis/${processId}/puncture`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateCheck(processId, values) {
  return request(`/api/dialysis/${processId}/check/核对护士`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateHe(processId, values) {
  return request(`/api/dialysis/${processId}/heparin`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateOn(processId, values) {
  return request(`/api/dialysis/${processId}/board-on`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateMedical(processId, values) {
  return request(`/api/dialysis/${processId}/medical-advice`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function getLongTermMedicalAdvice(id) {
  return request(`/api/patient-long-term-medical-advices/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function updateLongTermMedicalAdvice(id, values) {
  return request(`/api/patient-long-term-medical-advices/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function getPatientBed(id) {
  return request(`/api/patient-time-reservations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function updatePatientBed(id, values) {
  console.log(values);
  return request(`/api/patient-time-reservations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: values,
  });
}

export async function listTechnicalPosition() {
  return technicalPosition;
}
