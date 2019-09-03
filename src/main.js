import App from './App.svelte'

const app = new App({
    target: document.querySelector('#app'),
    props: {
        name: 'Egghead'
    }
})

export default app