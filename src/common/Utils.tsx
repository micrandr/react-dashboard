import UserService from "../services/UserServices"

export const getUserNameById = (id) => {
    let user_name = ''

    UserService.get(id).then( (response) => {

        user_name = response.data.userFirstName
    })
    return user_name;
}