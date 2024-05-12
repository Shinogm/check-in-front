export const API_URL = 'http://localhost:3001'

export const APIENDPOINTS = {

  // Users
  postRegisterPoint: `${API_URL}/admin/user/create`,
  postLoginPoint: `${API_URL}/admin/login`,
  putModifyUserPoint: (userID: number) => `${API_URL}/admin/user/update/${userID}`,
  getGetUserPoint: `${API_URL}/admin/users/get-all-users`,
  getGetUserByIdPoint: (userID: number) => `${API_URL}/admin/user/get-user/${userID}`,
  deleteDeleteUserPoint: (userID: number) => `${API_URL}/admin/user/delete/${userID}`,

  // Clients
  postCreateClientPoint: `${API_URL}/client/create`,
  postClientIdentifyPoint: `${API_URL}/client/identify`,
  getGetClientPoint: `${API_URL}/client/get-all-clients`,
  getGetClientByIdPoint: (clientID: number) => `${API_URL}/client/get-client/${clientID}`,
  putModifyClientPoint: (clientID: number) => `${API_URL}/client/modify-client/${clientID}`,
  deleteDeleteClientPoint: (clientID: number) => `${API_URL}/client/delete-client/${clientID}`,

  // Fingers
  postCreateClientFingerPoint: (clientID: number) => `${API_URL}/finger/create/${clientID}`,
  getGetFingerPoint: `${API_URL}/finger/get-all-fingers`,

  // Memberships
  postCreateMembershipPoint: (clientID: number, membershipMonth: number) => `${API_URL}/membership/create?client_id=${clientID}&membership_month=${membershipMonth}`,
  getGetMembershipsPoint: (member: string) => `${API_URL}/membership/get-members/${member}`,
  getCheckMembershipIsOutPoint: `${API_URL}/membership/check-all-membership`,
  getMembershipIsOutFingerPoint: `${API_URL}/membership/finger/check-membership`,
  deleteCancelMembershipPoint: (membershipID: number) => `${API_URL}/membership/cancel/${membershipID}`,
  deleteCancelMembershipCodePoint: (code: number) => `${API_URL}/membership/cancel/code/${code}`,

  // Permissions
  getGetPermsAllPoint: `${API_URL}/perms/get-permissions`,
  getGetPermByIdPoint: (permID: string) => `${API_URL}/perms/get-permission/${permID}`,
  deleteDeletePermPoint: (permID: string) => `${API_URL}/perms/delete-permission?enum=${permID}`,

  // Default
  postDefaultPoint: `${API_URL}/`

}
