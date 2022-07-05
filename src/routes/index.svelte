<script context="module" lang="ts">
	import Header from '$lib/Article/Header.svelte';
	import Subheader from '$lib/Article/Subheader.svelte';
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let offsetWidth = 7;

	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Windovvsill Contact Page" />
</svelte:head>

<section>
	<div class="content">
		<div class="Header">
			<Header>Windowsill</Header>
			<!-- <div class="line">
				<Subheader>Steve Vezeau</Subheader>
			</div> -->
		</div>

		<Subheader>Steve Vezeau</Subheader>
		<div class="links">
			<a target="_blank" href="https://github.com/Windovvsill">github/windovvsill</a>
			<a target="_blank" href="https://stackoverflow.com/users/5708566/windowsill"
				>stackoverflow/windowsill</a
			>
			<a target="_blank" href="https://www.linkedin.com/in/svezer/">linkedin/svezer</a>
		</div>
		<Subheader>Functional-Style Typescript</Subheader>
		<Subheader>Application Developer</Subheader>
		<Subheader>Focusing on leading teams to create super good products</Subheader>
	</div>
</section>

<style>
	section {
		display: block;
	}

	.rel {
	}

	.Header {
		border-bottom: 1px solid white;
		position: relative;
	}

	.line {
		--size: 150pt;
		position: absolute;
		bottom: -25pt;
		width: var(--size);
		background-color: var(--primary-color);
	}

	.links {
		padding-top: 16pt;
		padding-bottom: 16pt;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		padding-top: 22vh;
		align-items: center;
	}

	a {
		padding: 8pt;
	}
</style>
