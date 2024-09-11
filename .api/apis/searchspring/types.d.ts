import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type GetSearchMetadataParam = FromSchema<typeof schemas.GetSearch.metadata>;
export type GetSearchResponse200 = FromSchema<typeof schemas.GetSearch.response['200']>;
