import http from './http-common';

const getAll = () => {
    return http.get('/sessions');
}

const get = id => {
    return http.get(`/sessions/${id}`);
}

const create = data => {
    return http.post("/sessions", data);
}

const update = (id, data) => {
    return http.put(`/sessions/${id}`, data);
};
  
const remove = id => {
    return http.delete(`/sessions/${id}`);
};
  
const removeAll = () => {
    return http.delete(`/sessions`);
};
    
const findByTitle = title => {
    return http.get(`/sessions?title=${title}`);
};
  
const SessionService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};

  
export default SessionService;