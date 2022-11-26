import { request } from "./request";

export function getAllClassInfoByEntryModule(id) {
  return request({
    method: "get",
    url: `/classInfo/getAllClassInfo/${id}`,
  });
}