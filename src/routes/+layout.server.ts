import { handleServerSession } from '@lucia-auth/sveltekit';
import type { LayoutServerLoad } from './$types';

const customLoad = (async (event) => {
	console.log('eggs', event);
}) satisfies LayoutServerLoad;

export const load = handleServerSession(customLoad);
