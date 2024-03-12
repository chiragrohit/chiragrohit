<div>
	<h1 class="text-3xl">Contact</h1>
</div>

<div class="flex flex-col items-center">
	<form class="w-full max-w-lg">
		<div class="mb-4">
			<label for="name" class="block text-lg font-bold mb-2">Name</label>
			<input type="text" id="name" class="w-full p-2 border-2 rounded-md bg-yellow-100" />
		</div>

		<div class="mb-4">
			<label for="email" class="block text-lg font-bold mb-2">Email</label>
			<input type="email" id="email" class="w-full p-2 border-2 rounded-md bg-yellow-100" />
		</div>

		<div class="mb-6">
			<label for="message" class="block text-lg font-bold mb-2">Message</label>
			<textarea id="message" rows="4" class="w-full p-2 border-2 rounded-md bg-yellow-100 h-[200px]"
			></textarea>
		</div>

		<div class="flex items-center justify-center">
			<button type="submit" class="btn-primary btn-wide">Submit</button>
		</div>
	</form>
</div>

<style>
	textarea {
		resize: none;
	}
</style>
