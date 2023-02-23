import { handleServerSession } from '@lucia-auth/sveltekit';
import type { LayoutServerLoad } from './$types';

const customLoad = (async (event) => undefined) satisfies LayoutServerLoad;

export const load = handleServerSession(customLoad) satisfies LayoutServerLoad;
