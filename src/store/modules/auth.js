/* eslint-disable no-unused-vars */
import api from '../../api/helpers';
import constant from '../../api/constants';

import {router} from '../../main';
// import qs from 'qs';
import Vue from 'vue'


const state = {
   token : window.localStorage.getItem('rp_token'),
};

const getters = {
    isLoggedIn: state => !!state.token,
};

const mutations = {
    setToken: (state, token) => state.token = token,
};

const actions = { 
    async signup({ commit }, data) {
        return await api.signup(data).then(function (response) {
            //check if request is accepted or not
            if(response.data.status === constant.SUCCESS){
                Vue.notify({
                    type: 'success',
                    group: 'foo',
                    title: 'Success',
                    speed: 500,
                    duration: 5000,
                    width:500,
                    text: response.data.message
                });
                router.push('/signup-success');
            }else{
                Vue.notify({
                    type: 'error',
                    group: 'error',
                    title: 'Error',
                    speed: 500,
                    duration: 5000,
                    width:500,
                    text: response.data.message
                  });
            }
          
        }).catch(function (error) {
            //handles 500s error
            if(error.response.status >= 500){
                Vue.notify({
                    type:  'error',
                    group: 'error',
                    title: 'Error',
                    speed: 500,
                    duration: 5000,
                    width:'100%',
                    text: error.response.data.message
                });
            }
            //handles 400s error
            for (var i = 0; i < error.response.data.errors.dateOfBirth.length; i++){
                Vue.notify({
                    type: 'error',
                    group: 'error',
                    title: 'Error',
                    speed: 500,
                    duration: 5000,
                    width:'100%',
                    text: error.response.data.errors.dateOfBirth[0]
                });
            }
        });
    },

    async login({ commit}, data) {
        return await api.login(data).then(response => {
            if(response.data.status === constant.SUCCESS){
                commit('setToken', response.data.data.Token);
                window.localStorage.setItem('rp_token', response.data.data.Token);

                Vue.notify({
                    type:  'foo',
                    group: 'foo',
                    title: `Hi ${response.data.data.Username}`,
                    speed: 500,
                    duration: 5000,
                    width:500,
                    text: "Welcome back!"
                });

                router.push(`/found-reports`);

            }else{
                Vue.notify({
                    type:  'error',
                    group: 'error',
                    title: 'Error',
                    speed: 500,
                    duration: 5000,
                    width:500,
                    text: response.data.message
                });
            }
          
        }).catch(function (error) {
            if(error.response.status >= constant.SERVER_ERROR){
                Vue.notify({
                    type:  'error',
                    group: 'error',
                    title: 'Error',
                    speed: 500,
                    duration: 5000,
                    width:'100%',
                    text: "Internal Server Error....please try again!"
                });
            }
            for (var i = 0; i < error.response.data.errors.dateOfBirth.length; i++){
                Vue.notify({
                    type:  'error',
                    group: 'error',
                    title: 'Error',
                    speed: 500,
                    duration: 5000,
                    width:'100%',
                    text: error.response.data.errors.dateOfBirth[0]
                });
            }
        });
    },

    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('rp_token');

        router.push('/login');
    },
};


export default {
    state,
    getters,
    mutations,
    actions
};