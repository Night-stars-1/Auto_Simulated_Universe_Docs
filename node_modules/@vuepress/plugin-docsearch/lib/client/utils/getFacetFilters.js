import { isArray } from '@vuepress/shared';
/**
 * Get facet filters for current lang
 */
export const getFacetFilters = (rawFacetFilters = [], lang) => [
    `lang:${lang}`,
    ...(isArray(rawFacetFilters)
        ? rawFacetFilters
        : [rawFacetFilters]),
];
