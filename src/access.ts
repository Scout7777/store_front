/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    admin: currentUser && currentUser.role === 'admin',
    doctor: currentUser && currentUser.role === 'doctor',
    nurse: currentUser && currentUser.role === 'nurse',
    engineer: currentUser && currentUser.role === 'engineer',
    // doctor: xx, 不同的角色以不同名称返回即可
  };
}
