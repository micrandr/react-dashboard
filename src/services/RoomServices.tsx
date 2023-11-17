import http from './http-common';

const getAll = () => {
    return http.get('/rooms');
}

const get = id => {
    return http.get(`/rooms/${id}`);
}

const create = data => {
    return http.post("/rooms", data);
}

const update = (id, data) => {
    return http.put(`/rooms/${id}`, data);
};
  
const remove = id => {
    return http.delete(`/rooms/${id}`);
};
  
const removeAll = () => {
    return http.delete(`/rooms`);
};
    
const findByTitle = title => {
    return http.get(`/rooms?title=${title}`);
};
  
const RoomService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};

  
export default RoomService;