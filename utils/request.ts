
import { stringify } from 'querystring';

interface requestParams {
  url: string,
  params?: any,
  method?: 'get' | 'post'
}

const baseUrl = 'https://www.mingyangli.com'

function formatParams(method: string, url: string, params: any) {
  let finalUrl = url;
  let data = {};
  if (method === 'get') {
    finalUrl = `${baseUrl}${url}?${stringify(params)}`
    data = {
      method,
    }
  } else {
    finalUrl = `${baseUrl}${url}`;
    data = {
      body: JSON.stringify(params),
      method,
    }
  }
  return {
    finalUrl,
    data
  }
}

const defaultOptions: RequestInit = {
  mode: 'cors',
  headers: {
    'Cache-Control': 'max-age=36000000',
    'Content-Type': 'application/json'
  },
};

export default function request({
  url,
  params = {},
  method = 'get',
}: requestParams) {
  const { data, finalUrl } = formatParams(method, url, params)

  // 合并默认配置、自定义配置，用自定义配置覆盖默认配置
  const options = {
    ...defaultOptions,
    ...data
  };
  const res = fetch(finalUrl, options)
    .then(parseJSON);
  return res;
}

async function parseJSON(response: any) {
  const promise = response.json();
  const rst = await promise;
  if (rst.success) {
    return promise;
  }
  return promise;
}