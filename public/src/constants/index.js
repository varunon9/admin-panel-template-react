const BASE_URL = 'http://localhost:4000';

export const TOAST_TYPES = {
  ERROR: 'error',
  WARN: 'warn',
  SUCCESS: 'success',
  INFO: 'info'
};

export const URLS = {
  LOGIN: BASE_URL + '/login',
  SIGNUP: BASE_URL + '/signup',
  PROFILE: BASE_URL + '/auth/profile'
};

export const REQUEST_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put'
};

export const AUTH_TOKEN = 'authToken';
