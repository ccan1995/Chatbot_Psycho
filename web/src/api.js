// 保存接口

export function http(url, option) {
  return fetch(url, option).then((res) => res.json());
}

export function httpPost(url, body) {
  const opts = {
    method: "POST", //请求方法
    body: JSON.stringify(body), //请求体
    headers: { "Content-Type": "application/json" },
  };
  return fetch(url, opts).then((res) => res.json());
}

export function apiChat(msg, lang = "en", type = "") {
  return httpPost("/api/chat", { msg, lang, type });
}
