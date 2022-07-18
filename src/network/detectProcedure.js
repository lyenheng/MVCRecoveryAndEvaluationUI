import { request } from "./request";

export function startDetect(data = {}) {
  return request({
    method: "post",
    url: "/detectProcedure/startDetect",
    data,
  });
}

export function listDetectProcedure(data = {}) {
  return request({
    method: "post",
    url: "/detectProcedure/listProcedure",
    data,
  });
}
