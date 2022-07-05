<script context="module" lang="ts">
	import Header from '$lib/Article/Header.svelte';
	import Subheader from '$lib/Article/Subheader.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Windovvsill Contact Page" />
</svelte:head>

<section>
	<Header>Windowsill</Header>
	<div>
		<a href="https://github.com/Windovvsill">github/windovvsill</a>
		<a href="https://stackoverflow.com/users/5708566/windowsill">stackoverflow/windowsill</a>
		<a href="https://www.linkedin.com/in/svezer/">linkedin/svezer</a>
	</div>
	<Subheader />
	<Subheader>Functional-Style Typescript</Subheader>
	<Subheader>Application Developer</Subheader>
	<Subheader>Focusing on leading teams to create super good products</Subheader>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		padding-top: 22vh;
	}

	a {
		padding: 8pt;
	}
</style>
