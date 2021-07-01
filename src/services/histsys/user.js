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

export async function pageUser({ page = 0, size = 10 }) {
  return request(`/api/users/page?page=${page}&size=${size}`, {
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
