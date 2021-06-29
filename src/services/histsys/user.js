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
