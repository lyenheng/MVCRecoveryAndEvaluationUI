import { request } from "./request";

export function getGraphByDetectId(id) {
  return request({
    method: "get",
    url: `/moduleDependencyGraph/${id}`,
  });
}
