import 'bootstrap'
import './style.scss'

import InputButton from "./components/InputButton.vue"
import App from "./App.vue";
import { createApp } from 'vue';
import { createStore } from 'vuex'

const store = createStore({
	state: {
		calculatorInputValue: "0"
	},
	getters: {
		getCalculatorInputValue: state => state.calculatorInputValue
	},
	mutations: {

		setCalculatorInputValue(state, payload){
			payload = payload.toString()
			state.calculatorInputValue = payload
		},

		updateCalculatorInputValue(state, payload){
			payload = payload.toString()
			state.calculatorInputValue += payload
		}

	},
	actions: {

	}
})

const app = createApp(App);
app.use(store)
app.component('InputButton', InputButton)
app.mount('#app');