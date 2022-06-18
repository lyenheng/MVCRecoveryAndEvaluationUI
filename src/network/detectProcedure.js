import { request } from "./request";

export function startDetect(data = {}) {
  return request({
    method: "post",
    url: "/detectProcedure/startDetect",
    data,
  });
}
