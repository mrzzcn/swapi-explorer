import SWAPI, { RequestParams } from 'swapi-typescript';
import { get } from './http';

function request<T>(params: RequestParams) {
  return get<T>(params.url, params.query);
}

const SWAPI_JSON = new SWAPI({
  request
});

const SWAPI_WOOKIEE = new SWAPI({
  format: 'wookiee',
  request
});

export default SWAPI_JSON;
export { SWAPI_JSON as SWAPI, SWAPI_WOOKIEE };
