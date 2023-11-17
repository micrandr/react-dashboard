import http from '../services/http-common';

const getAll = () => {
    return http.get('/courses');
}

const get = id => {
    return http.get(`/courses/${id}`);
}

const create = data => {
    return http.post("/courses", data);
}

const update = (id, data) => {
    return http.put(`/courses/${id}`, data);
};
  
const remove = id => {
    return http.delete(`/courses/${id}`);
};
  
const removeAll = () => {
    return http.delete(`/courses`);
};
    
const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
};
  
const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
   //removeAll,
   //findByTitle,
};

  
export default UserService;