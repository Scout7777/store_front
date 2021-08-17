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

export async function createPatient(values) {
  return request('/api/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function putPatient(id, values) {
  return request(`/api/patients/${id}/medical-record`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createDiagnosisInfo(id, values) {
  return request(`/api/patients/${id}/diagnosis-info`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createPictures(id, values) {
  return request(`/api/patients/${id}/pictures`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createAllergy(id, values) {
  return request(`/api/patients/${id}/allergy-history`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createChronicComp(id, values) {
  return request(`/api/patients/${id}/chronic-comps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createInfectiousDisease(id, values) {
  return request(`/api/patients/${id}/infectious-disease`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createVascularAccess(id, values) {
  return request(`/api/patients/${id}/vascular-access`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createVascularAccessComp(id, values) {
  return request(`/api/patients/${id}/vascular-access-comps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function getPatient(id) {
  return request(`/api/patients/detail/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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
  return request(`/api/patient-time-reservations/${id}/book`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { reservations: values },
  });
}

export async function listTechnicalPosition() {
  return technicalPosition;
}
