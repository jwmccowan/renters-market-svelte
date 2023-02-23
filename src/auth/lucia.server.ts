import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from '../db/prisma.server';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	transformUserData: (userData) => ({
		userId: userData.id,
		username: userData.username
	}),
	generateCustomUserId: () => crypto.randomUUID()
});

export type Auth = typeof auth;
