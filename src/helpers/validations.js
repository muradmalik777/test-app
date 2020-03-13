export const validateEmail = (data) => {
    if(data && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))){
        return true
    } else {
        return false
    }
}

export const validatePassword = (data) => {
    if(data && data.length >= 8){
        var specialRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let upperCase = false
        let number = false
        let specialCharacter = false
        for(let a=0; a<data.length; a++){
            if(data[a] === data[a].toUpperCase()){
                upperCase = true
                break;
            }
        }
        let str = String(data);
        for(let a=0; a<str.length; a++){
            if(!isNaN(str.charAt(a))){           //if the string is a number, do the following
                number = true
            }
        }
        if(specialRegex.test(data)){
            specialCharacter = true
        }
        if(upperCase && number && specialCharacter){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export const validateName = (data) => {
    if(data && data.length >= 3){
        return true
    } else{
        return false
    }
}