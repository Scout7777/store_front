import { request } from 'umi';

/** 获取用户列表 GET /api/users/page */
export async function user(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/users/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}