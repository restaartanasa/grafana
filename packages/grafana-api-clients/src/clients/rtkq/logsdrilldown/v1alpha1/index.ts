export { BASE_URL, API_GROUP, API_VERSION } from './baseAPI';
import { generatedAPI as rawAPI } from './endpoints.gen';

export * from './endpoints.gen';
export type * from './endpoints.gen.ts';
export const generatedAPI = rawAPI.enhanceEndpoints({});
