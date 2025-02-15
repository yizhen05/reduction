<script lang="ts">
	let numerator: number = 1;
	let denominator: number = 1;
	let result_numerator: number = 0;
	let result_denominator: number = 0;

	function gcd(numerator: number, denominator: number): number {
		if (denominator === 0) {
			return numerator;
		}
		return gcd(denominator, numerator % denominator);
	}
</script>

<h1>REDUCTION</h1>

<p>約分したい分数を入力してください。</p>

<div class="naraberu">
	<div class="before_reduction">
		<div class="w-20 rounded-2xl bg-emerald-300 p-4">
			<!-- <input type="number" bind:value={numerator} style="width: calc(5ch + 1rem);" /> -->
			<input type="text" bind:value={numerator} style="width: 5ch;" />
		</div>
		<div class="separator">─────</div>
		<div class="w-20 rounded-2xl bg-emerald-300 p-4">
			<!-- <input type="number" bind:value={denominator} style="width: calc(5ch + 1rem);" /> -->
			<input type="text" bind:value={denominator} style="width: 5ch;" />
		</div>
	</div>

	<div class="after_reduction">
		<button
			on:click={() => {
				const divisor = gcd(numerator, denominator);
				// numerator /= divisor;
				// denominator /= divisor;
				result_numerator = numerator / divisor;
				result_denominator = denominator / divisor;
			}}
			class="RUN_BUTTON">ここを押して約分</button
		>
	</div>

	<div>
		<div class="w-20 rounded-2xl bg-emerald-300 p-4">
			{result_numerator}
		</div>
		<div class="separator">─────</div>
		<div class="w-20 rounded-2xl bg-emerald-300 p-4">
			{result_denominator}
		</div>
	</div>
</div>

<style>
	h1 {
		text-align: center;
	}

	p {
		text-align: center;
	}
	.naraberu {
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin: auto; */
	}

	.before_reduction {
		/* width: 30px;
		height: 30px; */
		margin: 0 10px;
	}

	.RUN_BUTTON {
		background-color: #4caf50;
		border: none;
		color: white;
		/* text-align: center; */
		margin: 10 10px;
	}
	.after_reduction {
		/* width: 30px;
		height: 30px; */
		margin: 0 10px;
	}
</style>
