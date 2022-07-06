<script context="module" lang="ts">
	import Header from '$lib/Article/Header.svelte';
	import Subheader from '$lib/Article/Subheader.svelte';
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import texture from './texture.svg';
	import stack from './steps.svg';
	import Header2 from '$lib/Article/Header2.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Windovvsill Contact Page" />
</svelte:head>

<div class="foot">
	<!-- <img id="stack" src={stack} /> -->
</div>
<div class="foot">
	<img id="hills" src={texture} alt="Footer Texture" />
</div>
<section>
	<div class="content">
		<div class="Header">
			<Header>Windowsill</Header>
			<!-- <div class="line">
				<Subheader>Steve Vezeau</Subheader>
			</div> -->
		</div>

		<Header2>Steve Vezeau</Header2>
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
		position: relative;
		width: 100%;
		height: 100%;
	}

	.foot {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;
		/* height: 25vh; */
		margin: 0;
		padding: 0;
	}

	.Header {
		border-bottom: 1px solid white;
		position: relative;
	}

	#stack {
		filter: drop-shadow(-5px -3px 3px rgba(255, 185, 254, 0.4));
		height: 25%;
	}

	#hills {
		filter: drop-shadow(15px 0px 4px rgba(90, 243, 171, 0.4));
		height: 100%;
	}

	img {
		object-fit: fill;
		width: 100%;
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
		font-size: 24pt;
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
