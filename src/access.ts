/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    alluser: currentUser && currentUser.role,
    admin: currentUser && currentUser.role === 'admin',
    worker:
      currentUser &&
      (currentUser.role === 'admin' ||
        currentUser.role === 'doctor' ||
        currentUser.role === 'nurse'),
  };
}
