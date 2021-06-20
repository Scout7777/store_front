/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    admin: currentUser && currentUser.access === 'admin',
    // doctor: xx, 不同的角色以不同名称返回即可
  };
}
