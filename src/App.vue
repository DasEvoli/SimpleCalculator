<template lang="">
	<div class="container">
		<div class="calculator-container">
			<div id="calculator-display">{{this.$store.getters.getCalculatorInputValue}}</div>
			<div id="calculator-numpad">
				<InputButton value="("/>
				<InputButton value=")"/>
				<InputButton value="C"/>
				<InputButton value="AC"/>
				<InputButton value="1"/>
				<InputButton value="2"/>
				<InputButton value="3"/>
				<InputButton value="+"/>
				<InputButton value="4"/>
				<InputButton value="5"/>
				<InputButton value="6"/>
				<InputButton value="-"/>
				<InputButton value="7"/>
				<InputButton value="8"/>
				<InputButton value="9"/>
				<InputButton value="/"/>
				<InputButton value="0"/>
				<InputButton value="."/>
				<InputButton value="="/>
				<InputButton value="*"/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
	.calculator-container{
		padding: 1rem;
		width: 18rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: auto;
		margin-left: auto;
		height: 100vh;
	}

	#calculator-numpad {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	#calculator-display {
	    text-align: end;
    	font-size: 1.5rem;
		padding: 0rem 0.2rem;
    	border-radius: 0.5rem;
		border: 2px solid rgb(161, 161, 161);
	}
	
</style>