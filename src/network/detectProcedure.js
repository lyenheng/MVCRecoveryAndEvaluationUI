import { request } from "./request";

export function startDetect(data = {}, onUploadProgress) {
  return request({
    method: "post",
    url: "/detectProcedure/startDetect",
    data,
    onUploadProgress,
  });
}

export function listDetectProcedure(data = {}) {
  return request({
    method: "post",
    url: "/detectProcedure/listProcedure",
    data,
  });
}
