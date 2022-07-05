<script lang="ts">
	/**
	 * @type {string}
	 */
	export let code: string;

	const keyToColor = (key: string) => {
		switch (key) {
			case '#':
				return 'red';
			case '$':
				return 'purple';
			case '%':
				return 'orange';
			case '^':
				return 'blue';
			case '@':
				return 'black';
		}
	};

	const parseToken = (_code: string) => {
		return _code
			.split('\n')
			.map((s) => s.split('//'))
			.map((side) => ({
				words: side[0].split(/[\s@]/g).map((word) => ({
					word: word.replace(/[$#%^@]/, ''),
					styleKey: keyToColor(word[0])
				})),
				comment: side[1]
			}));
	};

	$: tokens = parseToken(code);

	$: {
		console.log(tokens);
	}
</script>

<div class="wrap">
	{#each tokens as line}
		<p class="line">
			{#each line.words as pair}
				<span style={'color:' + pair.styleKey}>{' ' + pair.word}</span>
			{/each}
			{#if line.comment}
				<span class="comment">{'//' + line.comment}</span>
			{/if}
		</p>
	{/each}
</div>

<style>
	.wrap {
		background-color: var(--text-color);
		border-radius: 1rem;
		padding: 1rem;
		color: var(--primary-color);
		font-family: 'Fira Mono';
		white-space: pre;
	}

	p {
		color: var(--primary-color);
		margin: 0;
	}

	span {
		word-break: break-all;
		/* margin-left: 8pt; */
		display: inline;
		word-wrap: break-word;
		/* white-space: normal; */
	}

	.comment {
		color: green;
	}

	.line {
		white-space: pre;
	}
</style>
