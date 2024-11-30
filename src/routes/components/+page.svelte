<svelte:head>
	<title>Chirag Rohit - Components</title>
</svelte:head>
<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<h1 class="text-3xl">Components</h1>

	<diV class="flex flex-col space-y-4">
		<!-- ################################################# BUTTON Component -->
		<div>
			<p class="text-xl">BUTTON</p>
			<div>
				<button class="btn-primary">btn-primary</button>
			</div>
		</div>

		<!-- ################################################# INPUT Component -->
		<div>
			<p class="text-xl">INPUT</p>
			<div>
				<input class="input" />
			</div>
		</div>

		<!-- ################################################# POST Component -->
		<div>
			<p class="text-xl">POST</p>
			<ul class="flex flex-col gap-2 max-w-screen-md mx-auto">
				<li class="posts">
					<a href="#">
						<h1 class="post-title">Post Title</h1>
						<p class="post-date">Apr 8, 2024</p>
						<p class="post-description">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a, corporis
							consequuntur voluptate quaerat quod natus animi sit dolore architecto, magni veniam
							aperiam aut! Ad nisi eveniet debitis adipisci deserunt.
						</p>
					</a>
				</li>
			</ul>
		</div>

		<!-- ################################################# CARD Component -->
		<div class="grid grid-cols-2 gap-4">
			<div class="card">
				<div class="gen-ai-card card-body">
					<span>Gen AI</span>
					<h1>Gen AI Title</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a, corporis
						consequuntur voluptate quaerat quod natus animi sit dolore architecto, magni veniam
						aperiam aut! Ad nisi eveniet debitis adipisci deserunt.
					</p>
					<button class="gen-ai-btn btn">Buy Now</button>
				</div>
			</div>

			<div class="card">
				<div class="data-science-card card-body">
					<span>Data Science</span>
					<h1>Data Science Card</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a, corporis
						consequuntur voluptate quaerat quod natus animi sit dolore architecto, magni veniam
						aperiam aut! Ad nisi eveniet debitis adipisci deserunt.
					</p>
					<button class="data-science-btn btn">Buy Now</button>
				</div>
			</div>

			<div class="card">
				<div class="web-dev-card card-body">
					<span>Web Development</span>
					<h1>Web Dev Card</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a, corporis
						consequuntur voluptate quaerat quod natus animi sit dolore architecto, magni veniam
						aperiam aut! Ad nisi eveniet debitis adipisci deserunt.
					</p>
					<button class="web-dev-btn btn">Buy Now</button>
				</div>
			</div>

			<div class="card">
				<div class="default-card card-body">
					<span>Default</span>
					<h1>Default Card</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a, corporis
						consequuntur voluptate quaerat quod natus animi sit dolore architecto, magni veniam
						aperiam aut! Ad nisi eveniet debitis adipisci deserunt.
					</p>
					<button class="default-btn btn">Buy Now</button>
				</div>
			</div>
		</div>
	</diV>
</div>
