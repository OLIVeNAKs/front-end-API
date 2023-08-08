// has methods for sending HTTP requests to the Apis.

import http from "../http-common";

class StudentDataService {
  // retrieve all students
  getAll() {
    return http.get("/students/retrieve");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }

  // add student
  create(data) {
    return http.post("/students/add", data);
  }

  // update student
  update(id, data) {
    return http.put(`/students/update/${id}`, data);
  }

  // delete by id
  delete(id) {
    return http.delete(`/students/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/students/deleteall`);
  }

  findByPhysicalAddress(physical_address) {
    return http.get(`/students/find/${physical_address}`);
  }
}

export default new StudentDataService();
