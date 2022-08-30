<template>
	<div class="calculator-button" @click="chooseInput">{{this.value}}</div>
</template>
<script>
var mexp = require('math-expression-evaluator');
export default {
	
	props: {
		value: {
			default: '0'
		}
	},
	data() {
		return {

		}
	},

	methods: {
		chooseInput(){
			let curr = this.$store.getters.getCalculatorInputValue
			switch(this.value){
				case "AC":
					this.$store.commit('setCalculatorInputValue', "0")
					break
				case "C":
					if(curr.length <= 1) this.$store.commit('setCalculatorInputValue', 0)
					else {
						curr = curr.slice(0, -1)
						this.$store.commit('setCalculatorInputValue', curr)
					}
					break
				case "=":
					let value = mexp.eval(curr)
					this.$store.commit('setCalculatorInputValue', value)
					break
				default:
					if(curr.length <= 1 && curr == "0") this.$store.commit('setCalculatorInputValue', this.value)
					else{
						this.$store.commit('updateCalculatorInputValue', this.value)
					}
					break
			}
		}
	}
}
</script>
<style scoped>
	.calculator-button {
		height: 50px;
		align-items: center;
		width: 50px;
		display: flex;
		border: 2px solid rgb(161, 161, 161);
		border-radius: 10%;
		justify-content: center;
		margin: 2px;
	}

	.calculator-button:hover {
		background-color: rgb(161, 161, 161);
		color: white;
		cursor: pointer;
	}
</style>