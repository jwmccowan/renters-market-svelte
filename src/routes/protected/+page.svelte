<script lang="ts">
	import { getUser } from '@lucia-auth/sveltekit/client';

	const user = getUser();
</script>

<h1 class="text-3xl font-bold py-4">
	Welcome,&nbsp;{$user?.username}
</h1>
