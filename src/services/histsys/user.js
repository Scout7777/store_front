import { request } from 'umi';

export async function currentUser() {
  return request('/api/users/me', {
    method: 'GET',
  }).then((response) => {
    // console.log(response)
    return response.data;
  });
}

export async function login({ username, password }) {
  return request('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username, password },
  });
}

export async function pageUser({ params: { pageSize = 20, current = 1 } = {}, sort, filter }) {
  console.log({ sort, filter });
  return request(`/api/users/page?page=${current - 1}&size=${pageSize}`, {
    method: 'GET',
  }).then((response) => {
    return {
      data: response.data.content || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function createUser(values) {
  return request('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateUser(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}
