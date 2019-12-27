import api from '../../api/helpers';
import constant from '../../api/constants';
import {router} from '../../main';
import Vue from 'vue'


const state = {
    // banks_bucket: [],
    // loan_eligibility_info: window.localStorage.getItem('bsf_eligibility_info'),
};

const getters = {
    // getApplicationStage: state => state.applicationStage,
};

const mutations = {
    // setApplicationStage: (state, applicationStage) => state.applicationStage = applicationStage,
};

const actions = {   
    async postReport({ commit, rootState }, data) {
        //obtain token from auth module
        const {token} = rootState.auth

        //Call API module to submit form
        return await api.postMissingReport(token, data)
        // .then((resp) => {
        //     //return api.getMissingRelevantReport(token, resp.data.data)
        // }).catch((error) => {
        //     console.log(error.response.data)
        // });
    },

    async updateReport({ commit, rootState }, data) {
        //obtain token from auth module
        const {token} = rootState.auth
 
        //Call API module to submit form
        return await api.postFoundReport(token, data).then((response) => {
            if(response.data.status === true){
                // window.localStorage.setItem('bsf_app_stage', parseInt(appStage) + 1);
                // commit('setApplicationStatus', true)
                // window.localStorage.setItem('bsf_app_status', true);
                // const stage = api.resolveAppStage(parseInt(appStage) + 1);
                // router.push(`/${stage}`);
            }else{
                // window.localStorage.setItem('bsf_app_stage', parseInt(appStage) + 1);
                // commit('setApplicationStatus', false)
                // window.localStorage.setItem('bsf_app_status', false);
                // const stage = api.resolveAppStage(parseInt(appStage) + 1);
                // router.push(`/${stage}`);
 
                // Vue.notify({
                //     type:  'error',
                //     group: 'error',
                //     title: 'Error',
                //     speed: 500,
                //     duration: 5000,
                //     width:500,
                //     text: response.data.message
                // });
            }
 
        }).catch(function (error) {
            // //handles 500s error
            // if(error.response.status >= 500){
            //     Vue.notify({
            //         type:  'error',
            //         group: 'error',
            //         title: 'Error',
            //         speed: 500,
            //         duration: 5000,
            //         width:'100%',
            //         text: error.response.data.message
            //     });
            // }
            // for (var i = 0; i < error.response.data.errors.length; i++){
            //     Vue.notify({
            //         type:  'error',
            //         group: 'error',
            //         title: 'Error',
            //         speed: 500,
            //         duration: 5000,
            //         width:'100%',
            //         text: error.response.data.errors[0]
            //     });
            // }
        });
    },

    async getFoundReports({ commit, rootState }) {
        //obtain token from auth module
        const {token} = rootState.auth

        //Call API module to submit form
        return await api.getFoundReports(token)
    },
};


export default {
    state,
    getters,
    mutations,
    actions
};