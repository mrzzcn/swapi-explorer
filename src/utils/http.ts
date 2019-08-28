type RequestMethod = 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

async function request<T>(method: RequestMethod, url: string, data?: { [key: string]: number | boolean | string }) {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    body: JSON.stringify(data),
    keepalive: true
  });

  const responseData = await response.json();
  return responseData as T;
}

export function get<T>(url: string, query: { [key: string]: number | boolean | string }) {
  const connector = url.indexOf('?') >= 0 ? '&' : '?';
  const queryParams = new URLSearchParams();
  for (let key of Object.keys(query)) {
    queryParams.append(key, `${query[key]}`);
  }
  const urlWithQuery = `${url}${connector}${queryParams.toString()}`;
  return request<T>('GET', urlWithQuery);
}
