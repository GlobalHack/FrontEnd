export const baseUrl = `${process.env.REACT_APP_API_HOST}`;
export const apiPrefix = '/api';
export const requestHeaders = {
  AUTHORIZATION: `Bearer ${localStorage.jwt}`,
  'Content-Type': 'application/json',
};

export const employeePath = '/employees/';
export const employeeUrl = baseUrl + apiPrefix + employeePath;
export const consumerPath = '/consumers/';
export const consumerUrl = baseUrl + apiPrefix + consumerPath;
export const groupmembershipPath = '/groupmemberships/';
export const groupmembershipUrl = baseUrl + apiPrefix + groupmembershipPath;
export const intakePath = '/intakes/';
export const intakeUrl = baseUrl + apiPrefix + intakePath;
export const invitePath = '/invites/';
export const inviteUrl = baseUrl + apiPrefix + invitePath;
export const messagePath = '/messages/';
export const messageUrl = baseUrl + apiPrefix + messagePath;
export const notificationPath = '/notifications/';
export const notificationUrl = baseUrl + apiPrefix + notificationPath;
export const organizationPath = '/organizations/';
export const organizationUrl = baseUrl + apiPrefix + organizationPath;
export const organizationrolePath = '/organizationroles/';
export const organizationroleUrl = baseUrl + apiPrefix + organizationrolePath;
export const questionPath = '/questions/';
export const questionUrl = baseUrl + apiPrefix + questionPath;
export const questionSetPath = '/questionsets/';
export const questionSetUrl = baseUrl + apiPrefix + questionSetPath;
export const taskPath = '/tasks/';
export const taskUrl = baseUrl + apiPrefix + taskPath;
export const userPath = '/users/';
export const userUrl = baseUrl + apiPrefix + userPath;

export const apiCall = url => method => (filter) => {
  const request =
    typeof filter === 'object'
      ? new Request(url + filter.id, {
        method,
        headers: requestHeaders,
        body: JSON.stringify(filter),
      })
      : new Request(url + filter, {
        method,
        headers: requestHeaders,
      });

  return fetch(request).then(response => response.json()).catch(error => error);
};
