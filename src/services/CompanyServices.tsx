import http from './http-common';

const getAll = () => {
    return http.get('/compagnies');
}

const get = id => {
    return http.get(`/compagnies/${id}`);
}

const create = data => {
    return http.post("/compagnies", data);
}

const update = (id, data) => {
    return http.put(`/compagnies/${id}`, data);
};
  
const remove = id => {
    return http.delete(`/compagnies/${id}`);
};
  
const removeAll = () => {
    return http.delete(`/compagnies`);
};
    
const findByTitle = title => {
    return http.get(`/compagnies?title=${title}`);
};
  
const CompanyService = {
    getAll,
    get,
    create,
    update,
    remove,
   //removeAll,
   //findByTitle,
};

  
export default CompanyService;