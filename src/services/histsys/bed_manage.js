import { request } from 'umi';

export async function listBeds(areaId=-1, {current=1, pageSize=10}) {
  return request(`/api/beds/under-areas/${areaId}?current=${current}&pageSize=${pageSize}`, {
    method: 'GET',
  }).then((response) => {
    return {
      data: response.data || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function createBed(values) {
  return request('/api/beds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateBed(id, values) {
  return request(`/api/beds/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function deleteBed(id) {
  return request(`/api/beds/${id}`, {
    method: 'DELETE',
  });
}