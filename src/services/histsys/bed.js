import { request } from 'umi';
// import { toSearchPayload } from './utils';
import technicalPosition from './static_files/user_technical_position';

// export async function searchPatient(payload) {
//   // console.log(payload);
//   // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
//   return request(`/api/patients/search`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: toSearchPayload(payload),
//   }).then((response) => {
//     return {
//       data: response.data.content || [],
//       success: true,
//       total: response.data.totalElements || 0,
//     };
//   });
// }

export async function getAreas() {
  // console.log(payload);
  // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
  return request(`/api/bed-areas`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    console.log(response);
    return {
      data: response.data || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function createArea(values) {
  return request('/api/bed-areas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateArea(id, values) {
  return request(`/api/bed-areas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function deleteArea(id) {
  return request(`/api/bed-areas/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
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

export async function listTechnicalPosition() {
  return technicalPosition;
}
