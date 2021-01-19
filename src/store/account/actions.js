import router from '../../router';
import Axios from 'axios';

export function login({ commit }) {
    let url = 'https://randomuser.me/api/';
    Axios.get(url).then(function(response) {
        const user = response.data.results[0];
        let userData = {
            displayName: user.name.first,
            email: user.email,
            photoURL: user.picture.thumbnail,
            uid: user.login.uuid,
        };
        commit("setUserData", userData);
        router.push('/');
    }).catch(function(err) {
        console.log(err);
    })
}
