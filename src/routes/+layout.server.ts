import { handleServerSession } from '@lucia-auth/sveltekit';
import type { LayoutServerLoad } from './$types';

const customLoad = (async () => undefined) satisfies LayoutServerLoad;

export const load = handleServerSession(customLoad) satisfies LayoutServerLoad;
