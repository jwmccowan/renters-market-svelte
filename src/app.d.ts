// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: Validate;
			validateUser: ValidateUser;
			setSession: SetSession;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('./auth/lucia.server.js').Auth;
	type UserAttributes = {
		username: string;
	};
}

export {};
