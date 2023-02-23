import { auth } from './auth/lucia.server';
import { handleHooks } from '@lucia-auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import prisma from './db/prisma.server';

const attachPrismaClient = (async ({ event, resolve }) => {
	event.locals.prisma = prisma;
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(handleHooks(auth), attachPrismaClient) satisfies Handle;
