import { request } from "./request";

export function getMicroServiceModule(id) {
  return request({
    method: "get",
    url: `/microserviceModule/getMicroServiceModule/${id}`,
  });
}

export function getModuleDependencyTree(id) {
  return request({
    method: "get",
    url: `/microserviceModule/moduleDependencyTree/${id}`,
  });
}

export function getDatabaseInfo(id) {
  return request({
    method: "get",
    url: `/microserviceModule/databaseInfo/${id}`,
  });
}

export function getLayersRelationGraph(id) {
  return request({
    method: "get",
    url: `/microserviceModule/getLayersRelationData/${id}`,
  });
}

export function getMicroServiceEvaluation(id) {
  return request({
    method: "get",
    url: `/evaluation/${id}`,
  });
}
