import Vue from 'vue';

export default Vue.component('Profile', {
    data: () => ({
        name: 'Andre'
    }),
    template:`
        <div class="profile">
            <img src="./images/link.jpg" alt="">
            <h1>{{ name }}'s Journal</h1>
        </div>
    `
})