import { request } from 'umi';
import { toSearchPayload } from './utils';

export async function searchDevice(payload, sort) {
  // console.log(payload, sort, filter);
  // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
  return request(`/api/devices/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: toSearchPayload({...payload, sort}),
  }).then((response) => {
    return {
      data: response.data.content || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function createDevice(values) {
  return request('/api/devices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateDevice(id, values) {
  return request(`/api/devices/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function bindBed(id, bedId) {
  return request(`/api/devices/${id}/bind-bed/${bedId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    // data: { ...values },
  });
}

export async function statusDevice(id, status) {
  return request(`/api/devices/${id}/status/${status}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    // data: { ...values },
  });
}

export async function deleteDevice(id) {
  return request(`/api/devices/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
