import { request } from "./request";

export function getMicroServiceModule(id) {
  return request({
    method: "get",
    url: `/microserviceModule/${id}`,
  });
}
