import { request } from 'umi';
// import { toQueryString, toSearchPayload } from './utils';

export async function pageDs(type, params={}) {
  const { current = 1, pageSize = 10 } = params
  return request(`/api/disinfections/records/${type}?current=${current}&pageSize=${pageSize}`, {
    method: 'GET',
    // data: toSearchPayload({...payload, sort}),
  }).then((response) => {
    return {
      data: response.data.content || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function createDsGroup(groupType, values) {
  return request(`/api/disinfections/records/${groupType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function createDsItem(itemType, groupId, values) {
  return request(`/api/disinfections/records/${groupId}/${itemType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateDsItem(itemType, groupId, itemId, values) {
  return request(`/api/disinfections/records/${groupId}/${itemType}/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function deleteDsItem(itemType, groupId, itemId) {
  return request(`/api/disinfections/records/${groupId}/${itemType}/${itemId}`, {
    method: 'DELETE',
  });
}
