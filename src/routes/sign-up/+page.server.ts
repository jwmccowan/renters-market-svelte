import { error, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { auth } from '../../auth/lucia.server';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	const session = await event.locals.validate();
	if (session) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;

export const actions = {
	async default(event) {
		// Parse and validate form data
		const formData = Object.fromEntries(await event.request.formData());
		const parseResult = z
			.object({ username: z.string(), password: z.string().min(8) })
			.safeParse(formData);
		if (!parseResult.success) {
			throw error(400, 'Invalid credentials');
		}

		// Create user and password credentials
		const user = await auth.createUser({
			key: {
				providerId: 'username',
				providerUserId: parseResult.data.username,
				password: parseResult.data.password
			},
			attributes: {
				username: parseResult.data.username
			}
		});

		// Create and set session
		const session = await auth.createSession(user.userId);
		event.locals.setSession(session);

		throw redirect(302, '/');
	}
} satisfies Actions;
