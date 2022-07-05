<script lang="ts">
	import Header from '$lib/Article/Header.svelte';
	import Code from '$lib/Article/Code.svelte';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Windowsill Blog" />
</svelte:head>

<div class="blog">
	<!-- <Header>The Simple Mental Model for Mastering Complex React State</Header>

	<p>
		For developers who are new to React, there are several pitfalls that you will eventually fall
		into and roll your ankles.
	</p>

	<h2>The three tenets</h2>

	<h3>React uses object reference to detect state updates and schedule renders</h3>
	<p />

	<Code code={`{} === {} // false`} />

	<h3>Components shall be reactive</h3>
	<p>reactive</p>

	<h2>Case Studies</h2>

	<h3>The form with a dynamic number of inputs</h3>

	<Code
		code={`#export #const $Feed #= %props #=> %{
    const { ^feed@, profileId, ...rest } = props;
};`}
	/> -->
</div>

<style>
	.blog {
		width: 100%;
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}

	p {
		max-width: var(--column-width);
	}

	input {
		border: 1px solid transparent;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	.done {
		transform: none;
		opacity: 0.4;
		filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.1));
	}

	form.text {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1;
	}

	button.toggle {
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		box-sizing: border-box;
		background-size: 1em auto;
	}
</style>
