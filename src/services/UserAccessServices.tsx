import http from './http-common';

const getAll = () => {
    return http.get('/user_accesses');
}

const get = id => {
    return http.get(`/user_accesses/${id}`);
}

const create = data => {
    return http.post("/user_accesses", data);
}

const update = (id, data) => {
    return http.put(`/user_accesses/${id}`, data);
};
  
const remove = id => {
    return http.delete(`/user_accesses/${id}`);
};
  
const removeAll = () => {
    return http.delete(`/user_accesses`);
};
    
const findByTitle = title => {
    return http.get(`/user_accesses?title=${title}`);
};
  
const UserAccessService = {
    getAll,
    get,
    create,
    update,
    remove,
   removeAll,
   findByTitle,
};

  
export default UserAccessService;