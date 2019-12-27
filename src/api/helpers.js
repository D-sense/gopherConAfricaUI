import axios from 'axios';

//const ROOT_URL = "https://bsfacility.sterlingapps.p.azurewebsites.net/api"
const ROOT_URL = "http://localhost:8000"

export default {
    async signup(data){
        return axios({
            method: 'post',
            url: `${ROOT_URL}/user/signup`,
            headers: {'Content-Type' : 'application/json', 'Accept' : 'text/plain' }, 
            data: {
              fullname: data.fullname,
              username: data.username,
              email: data.email,
              password: data.password,
              phoneNumber: data.phoneNumber,
              displayPicture: data.displayPicture,
            }
        });
    },

    async login(credentials){
        return axios({
            method: 'post',
            url: `${ROOT_URL}/user/login`,
            headers: {'Content-Type' : 'application/json', 'Accept' : 'text/plain' }, 
            data: {
              email: credentials.email,
              password: credentials.password 
            }
        });
    },

    async postFoundReport(token, data){
        return axios({
            method: 'post',
            url: `${ROOT_URL}/found/create`,
            headers: {
                'Content-Type' : 'application/json', 
                'Accept' : 'text/plain' ,
                Authorization: `Bearer ${token}`
            }, 
            data: {
                Type: data.type,
                LG: data.lg,
                Image: data.image
            }
        });
    },

    
    async getPost(token, reportId){
        return axios({
            method: 'get',
            url: `${ROOT_URL}/user/${reportId}`,
            headers: {
                'Content-Type' : 'application/json', 
                'Accept' : 'text/plain' ,
                Authorization: `Bearer ${token}`
            },
        });
    },


    stringCleaner(str){
        if (str === undefined){
            str = "";
        }

        str = str.trim(str);        
        return str.replace("\"", "");
    },

    isNumberCorrect(param, len){
        if( param.length < len){
            return false;
        }

        return true
    },

    convertImageToBase46(src, callback){
        const reader = new FileReader();

        reader.addEventListener('load', () => callback(reader.result));

        reader.readAsDataURL(src);
    },

    isArrayEmpty(arr){
        if(arr.length > 0){
            return false;
        }
        return true;
    }



};