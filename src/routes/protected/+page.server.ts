import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const session = await event.locals.validate();
	if (!session) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;
