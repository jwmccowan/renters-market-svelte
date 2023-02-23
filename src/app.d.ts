import type { SetSession, Validate, ValidateUser } from '@lucia-auth/sveltekit';
import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			// lucia functions
			validate: Validate;
			validateUser: ValidateUser;
			setSession: SetSession;

			prisma: PrismaClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
