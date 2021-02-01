import Cookies from 'js-cookie';

// * Tools for managing the XSRF token cookie and making calls to the API.

/**
 * Abstraction of the browser built-in fetch API.
 * @param {Relative URL path to API resource} url 
 * @param {Fetch options object} options 
 */
export const fetch = async (url, options = {}) => {
  options.method = options.method || 'GET';
  options.headers = options.headers || {};
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('xsrfToken');
  }
  const res = await window.fetch(url, options);
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    res.data = data;
  }
  if (res.status >= 400) throw res;
  return res;
};

/**
 * Development only; restore the csrf token cookie.
 */
export const restoreCSRF = () => fetch('/api/csrf/restore');
