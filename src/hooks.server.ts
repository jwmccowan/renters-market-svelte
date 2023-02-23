import { auth } from './auth/lucia.server';
import { handleHooks } from '@lucia-auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const customHandle = (async ({ event, resolve }) => {
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(handleHooks(auth), customHandle) satisfies Handle;
