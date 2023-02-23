/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('./lucia.server.js').Auth;
	type UserAttributes = {
		username: string;
	};
}
