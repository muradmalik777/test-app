export const validateEmail = (data) => {
    if(data && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))){
        return true
    } else {
        return false
    }
}

export const validatePassword = (data) => {

}

export const validateName = (data) => {
    if(data && data.lenght >= 3){
        return true
    } else{
        return false
    }
}