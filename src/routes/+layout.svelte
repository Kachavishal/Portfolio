<script>
	import '../app.css';
</script>

<div class="bg-zinc-50 border fixed w-[100vw] backdrop-blur-sm bg-white/70 shadow">
	<nav class="max-w-screen-xl m-auto p-4 flex justify-between items-center">
		<h1 class="text-lg">
			<a href="/"> VISHAL KACHA </a>
		</h1>
		<ul class="flex">
			<li class="px-4"><a href="/resume">Resume</a></li>
		</ul>
	</nav>
</div>

<div class="pt-[60px]">
	<slot />
</div>
