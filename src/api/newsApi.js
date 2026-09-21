import { get, post } from "./httpClient.js";

export function getAll({ page = 0, size = 10, sort = "dateTime,desc" } = {}) {
  const params = new URLSearchParams({ page, size, sort });
  return get(`/api/v1/news?${params}`);
}

export function getById(id) {
  return get(`/api/v1/news/${id}`);
}

export function create(data) {
  return post("/api/v1/news", data);
}
