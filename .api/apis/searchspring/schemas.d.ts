declare const GetSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly siteId: {
                    readonly type: "string";
                    readonly pattern: "[a-z0-9]{6}";
                    readonly examples: readonly ["abc123"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Unique identifier to associate the Searchspring account making the request to the database. This can be found on the [My Account](https://manage.searchspring.net/management/account) page in the Searchspring Management Console under the **Account details** section.";
                };
                readonly resultsFormat: {
                    readonly type: "string";
                    readonly default: "json";
                    readonly examples: readonly ["json"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "For API integrations this parameter with a value of ***json*** is required to return results data as JSON. Other results formats are deprecated and no longer available.";
                };
                readonly q: {
                    readonly type: "string";
                    readonly max: 256;
                    readonly examples: readonly ["shoe"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Query value will search the index for terms that match the query. Will support up to 256 characters.";
                };
                readonly filter: {
                    readonly type: "object";
                    readonly description: "Filters the array of results. Filter parameter is used when a customer applies a filter in the UI.\n\nParameter names should be \"filter.[field]\", ***value*** is case sensitive.\n\nExamples:\n* filter.color=blue\n* filter.size=Large\n\nIf a filter is configured to have a type of slider or if a range is specified in the advanced section, in order to use the range functionality a low and/or high value will need to be chained after the field.\n\nExamples:\n* filter.price.low=2\n* filter.price.high=120";
                    readonly additionalProperties: true;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly bgfilter: {
                    readonly type: "object";
                    readonly description: "Functions the same as the ***filter*** parameter except it is used to filter intial results on pages like Category or Collection pages, or can also be used to filter intial results for all pages or specific pages of the site. This parameter should not be usable in the UI by a customer, see the filter parameter for customer interactions to filter results. \n\nParameter names should be \"bgfilter.[field]\", ***value*** is case sensitive.\n\nExamples:\n* bgfilter.collection_handle=new-arrivals\n* bgfilter.is_published=1\n\nIf a filter is configured to have a type of slider or if a range is specified in the advanced section, in order to use the range functionality a low and/or high value will need to be chained after the field.\n\nExamples:\n* filter.price.low=2\n* filter.price.high=120";
                    readonly additionalProperties: true;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly sort: {
                    readonly type: "object";
                    readonly description: "Used to sort returned results.\n\nParameter names should be \"sort.[field]=[asc/desc]\"\n\nExamples:\n* sort.price=asc\n* sort.is_bestseller=desc";
                    readonly additionalProperties: {
                        readonly type: "string";
                        readonly enum: readonly ["asc", "desc"];
                    };
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly userId: {
                    readonly type: "string";
                    readonly examples: readonly ["3022b347-a272-46c3-b676-62266e335a80"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "If the cookie **\"ssUserId\"** is currently set, use the value as the **userId** value. \n\nIf it doesn't exist yet, [generate a new ID](https://docs.searchspring.com/reference/uuid-v4) and store it in the **\"ssUserId\"** cookie.";
                };
                readonly sessionId: {
                    readonly type: "string";
                    readonly examples: readonly ["6576ccfc-1294-4e30-878a-77cc2ca5299f"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "If the cookie **\"ssSessionIdNamespace\"** is currently set, use the value as the **sessionId** value. \n\nIf it doesn't exist yet, [generate a new ID](https://docs.searchspring.com/reference/uuid-v4) and store it in the **\"ssSessionIdNamespace\"** cookie.";
                };
                readonly pageLoadId: {
                    readonly type: "string";
                    readonly examples: readonly ["945ea9d2-f155-4cf1-81f5-f7c60b3ce0db"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Create a new ID for this parameter on every page load. **If using a headless build create a new ID for this parameter on every URL route change.** \n\nIf it doesn't exist yet, [generate a new ID](https://docs.searchspring.com/reference/uuid-v4).";
                };
                readonly domain: {
                    readonly type: "string";
                    readonly examples: readonly ["http://www.searchspring.com/collections/mens?filter:ss_hierarchy=Mens/Clothing/Pants&amp;filter:page=1"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The full URL of the current page.";
                };
                readonly resultsPerPage: {
                    readonly type: "integer";
                    readonly default: 24;
                    readonly examples: readonly [48];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "This will allow you to override the number of results per page that are returned in the Search API response in the results array.";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly examples: readonly [5];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The page of results to be loaded.";
                };
                readonly redirectResponse: {
                    readonly type: "string";
                    readonly enum: readonly ["direct", "minimal", "full"];
                    readonly default: "minimal";
                    readonly examples: readonly ["direct"];
                    readonly description: "Will change how redirects behave in the API response. \n* direct - will return a 302 and redirect a shopper to the returned URL within **merchandising.redirect** in the response. Direct is best for API integrations as it is the most performant.\n* minimal - returns a partial API response without results data. Redirect URL will be returned in the merchandising object. If redirectResponse is not passed the default behavior is minimal.\n* full - returns the full API response with results data. Redirect URL will be returned in the merchandising object.";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "landing-page": {
                    readonly type: "string";
                    readonly examples: readonly ["black-friday"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Will allow the API to search the database for products that are a part of a configured [landing page campaign](https://searchspring.zendesk.com/hc/en-us/articles/115001067186-Landing-Pages). \n\nLanding page campaign example: **landing-page=black-friday**";
                };
                readonly tag: {
                    readonly type: "string";
                    readonly examples: readonly ["black-friday"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Will allow our API to search the database for products that are a part of a configured [segmented merchandising campaign](https://searchspring.zendesk.com/hc/en-us/articles/360042411431-Segmented-Merchandising). To trigger a segmented merchandising campaign the value must follow this format, **tag=merch.segment/[your-tag-here]**.\n\nSegmented Merchandising campaign example: **tag=merch.segment/logged-in-black-friday**";
                };
                readonly includedFacets: {
                    readonly type: "string";
                    readonly examples: readonly ["category_hierarchy"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Will allow you to specify specific facets you would like returned in the API response. The specified value passed must be the name of the facet field for it to be included. If the parameter is included, but the value is blank, facets will not be returned in the response.";
                };
                readonly excludedFacets: {
                    readonly type: "string";
                    readonly examples: readonly ["category_hierarchy"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Will allow you to remove a specified facet from the facets array returned in the API response. The specified value passed must be the name of the facet field for removal to function as expected.";
                };
                readonly disableInlineBanners: {
                    readonly type: "string";
                    readonly description: "Will disable inline banners from being returned in the API response.";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly lastViewed: {
                    readonly type: "string";
                    readonly examples: readonly ["145-JKL,267-MNO,3910-PQR,467-STU,589-VWX"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma seperated list of product SKUs or UIDs that the customer has recently viewed. The most recently viewed product SKU or UID being at the front of the string of product SKUs or UIDs passed. This is required to allow personalization functionality to personalize products in search results as the customer navigates the site. To learn more about personalized search, please refer to [this link](https://help.searchspring.net/hc/en-us/articles/4405042906779-Personalized-Search-Merchandising) for more information.";
                };
                readonly cart: {
                    readonly type: "string";
                    readonly examples: readonly ["123-ABC,567-DEF,8910-GHI"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma seperated list of product SKUs or UIDs that are in the current customers cart. This is required to allow personalization functionality to personalize products in search results as the customer navigates the site. To learn more about personalized search, please refer to [this link](https://help.searchspring.net/hc/en-us/articles/4405042906779-Personalized-Search-Merchandising) for more information.";
                };
                readonly shopper: {
                    readonly type: "string";
                    readonly examples: readonly ["3022b347-a272-46c3-b676-62266e335a80"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID of current logged-in shopper from your platform, this is required for personalization features. If the shopper is anonymous this should be omitted. To learn more about personalized search, please refer to [this link](https://help.searchspring.net/hc/en-us/articles/4405042906779-Personalized-Search-Merchandising) for more information.";
                };
            };
            readonly required: readonly ["siteId", "resultsFormat", "userId", "sessionId", "pageLoadId", "domain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly HTTP_X_FORWARDED_FOR: {
                    readonly type: "string";
                    readonly examples: readonly ["23.4.8.192"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "This header is ***required*** _only_ for accounts that are making API requests within their server (server-side integration). \n\nIn order for requests to be properly handled pass the active customer's IP address to Searchspring as the value for this header.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly title: "Search Response Data Model";
            readonly properties: {
                readonly pagination: {
                    readonly type: "object";
                    readonly description: "Allows a user to define and navigate pages of the results that are returned in the API response. This is returned as an object.";
                    readonly properties: {
                        readonly totalResults: {
                            readonly description: "Total number of possible results returned that match the passed query, and/or background filter, and/or filter parameters.";
                        };
                        readonly begin: {
                            readonly description: "First product in the returned result set relative to the page.\n\nFor example, if we are on the first page and there are 24 results per page, then the starting index value will be 1. However, if we are on the second page, then the starting index will be 25.";
                        };
                        readonly end: {
                            readonly description: "Ending index of the last product in the returned result set relative to the page.\n\nFor example, if we are on the first page and there are 24 results per page, then the ending index value will be 24. However, if we are on the second page, then the ending index will be 48.";
                        };
                        readonly currentPage: {
                            readonly description: "Current page of results the shopper is on. This can be modified in the API request via the ***page*** parameter.";
                        };
                        readonly totalPages: {
                            readonly description: "Total number of possible pages based on the returned result set that match the passed query, and/or background filter, and/or filter parameters passed in the API request. This value is also relative to the number of results specified per page.";
                        };
                        readonly previousPage: {
                            readonly description: "Number of the previous page if available.";
                        };
                        readonly nextPage: {
                            readonly description: "Number of the next page if available.";
                        };
                        readonly perPage: {
                            readonly description: "Current option for the number of results per page. This can be modified in the API request via the ***resultsPerPage*** parameter.";
                        };
                        readonly defaultPerPage: {
                            readonly description: "Default number of results returned per page. Reach out to Searchspring Support to have this value changed.";
                        };
                    };
                };
                readonly sorting: {
                    readonly type: "object";
                    readonly description: "Sorting allows a shopper to modify how the results returned by the API response are ordered. This is returned in the API response within the **options** array. \n\nThe **options** array houses an array of objects, and each object represents a different sorting option that is configured in the Seachspring Management Console. \n\nSorting options can be configured by finding the desired field to be used as a sort option on the [Field Settings](https://manage.searchspring.net/management/field-settings/display-fields) page, selecting the ***sort*** checkbox, then navigating to the [Sorting](https://manage.searchspring.net/management/express/sorting) page to activate and further configure how the sort option should behave and appear on the frontend.";
                    readonly properties: {
                        readonly options: {
                            readonly type: "object";
                            readonly description: "Array of objects, each object represents a sort option that is configured on the [Sorting page](https://manage.searchspring.net/management/express/sorting).";
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly description: "Field that is configured on the [Field Settings](https://manage.searchspring.net/management/field-settings/display-fields) page as **sort** and is actively being used as a sort option on the [Sorting](https://manage.searchspring.net/management/express/sorting) page.";
                                };
                                readonly direction: {
                                    readonly type: "string";
                                    readonly description: "Reflects the **Sort direction** configuration set for a sort option on the [Sorting](https://manage.searchspring.net/management/express/sorting) page. \n\n* asc\n* desc";
                                };
                                readonly label: {
                                    readonly type: "string";
                                    readonly description: "Label for the sort option to be displayed on the frontend. This can be configured on the [Field Settings](https://manage.searchspring.net/management/field-settings/display-fields) page in the **Label** input, or on the [Sorting](https://manage.searchspring.net/management/express/sorting) page.";
                                };
                            };
                        };
                    };
                };
                readonly resultLayout: {
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "This field is deprecated as it was previously utilized for Searchspring Integrations.";
                };
                readonly results: {
                    readonly type: "array";
                    readonly description: "Array of objects that represent the relevant results returned after the database is queried. The way to modify the result data that is returned is through the passed query, and/or filter, and/or background filter parameter value(s).";
                    readonly items: {
                        readonly title: "Result";
                        readonly type: "object";
                        readonly properties: {
                            readonly core: {
                                readonly type: "object";
                                readonly description: "List of general core fields that houses data to describe a result/product. These fields are always returned in the API response and are returned by default. The values of these fields are configured on the [Core Mappings](https://manage.searchspring.net/management/field-settings/core-mapping) page in the Searchspring Management Console. \n\n***Disclaimer - core fields will take precedence over fields with the same naming convention received in the data feed.***\n\nFor example, if a field named **price** is received in the data feed, the field and it's data that is mapped to the **price** core field in the Searchspring Management Console will take precedence.";
                                readonly properties: {
                                    readonly uid: {
                                        readonly type: "string";
                                        readonly description: "Unique identifier of a result.";
                                    };
                                    readonly sku: {
                                        readonly type: "string";
                                        readonly description: "SKU of a result.";
                                    };
                                    readonly intellisuggestData: {
                                        readonly type: "string";
                                        readonly description: "Unique data identifier of a result specific for IntelliSuggest search result click tracking.";
                                    };
                                    readonly intellisuggestSignature: {
                                        readonly type: "string";
                                        readonly description: "Unique signature identifier of a result specific for IntelliSuggest search result click tracking.";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of a result.";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "URL to the Product Display Page (PDP) of a result.";
                                    };
                                    readonly addToCartUrl: {
                                        readonly type: "string";
                                        readonly description: "URL to add the result to the cart.";
                                    };
                                    readonly price: {
                                        readonly type: "string";
                                        readonly description: "Active price of a result.";
                                    };
                                    readonly msrp: {
                                        readonly type: "string";
                                        readonly description: "Manufacturer Suggested Retail Price (MSRP) of a result.";
                                    };
                                    readonly imageUrl: {
                                        readonly type: "string";
                                        readonly description: "A normal image URL for a result. Typically will be a larger image size.";
                                    };
                                    readonly thumbnailImageUrl: {
                                        readonly type: "string";
                                        readonly description: "A smaller image URL for a result. This image will typically be rendered on smaller screen sizes.";
                                    };
                                    readonly rating: {
                                        readonly type: "string";
                                        readonly description: "Review rating of a result.";
                                    };
                                    readonly ratingCount: {
                                        readonly type: "string";
                                        readonly description: "Number of reviews a result has.";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Description of a result.";
                                    };
                                    readonly stockMessage: {
                                        readonly type: "string";
                                        readonly description: "Message that describes the current stock status of a result.";
                                    };
                                    readonly brand: {
                                        readonly type: "string";
                                        readonly description: "Brand of the result.";
                                    };
                                    readonly popularity: {
                                        readonly type: "string";
                                        readonly description: "Popularity rating of a result.";
                                    };
                                };
                            };
                            readonly attributes: {
                                readonly type: "string";
                                readonly description: "Will be an object of applicable attribute fields that represent any field that is configured as ***display*** on the [Field Settings](https://manage.searchspring.net/management/field-settings/display-fields) page in the SMC. The data returned in these fields can be utilized to allow your development team to further describe or add more functionality to a result.";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
                readonly facets: {
                    readonly title: "Filtering";
                    readonly type: "array";
                    readonly description: "Array of objects that represent the relevant filters returned after the database is queried. If all results returned in the API response share the same data for the field, then the filter will not be returned within the facets object.";
                    readonly items: {
                        readonly title: "Filter";
                        readonly type: "object";
                        readonly description: "A filter is a field that has been configured in the [Field Settings page](https://manage.searchspring.net/management/field-settings/display-fields) so that the API will recognize and return the field as a filter.";
                        readonly properties: {
                            readonly field: {
                                readonly type: "string";
                                readonly description: "The field that is configured on the [Field Settings page](https://manage.searchspring.net/management/field-settings/display-fields) to be used as a filter.";
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly description: "Label of the filter that is displayed on the frontend. This value can be configured on either the [Field Settings page](https://manage.searchspring.net/management/field-settings/display-fields) or the [Filtering page](https://manage.searchspring.net/management/filtering) under the ***Label*** column. \n\nThe default value is the name of the field's key.";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The ***type*** value returned for a filter represents the value configured in dropdown under the **Display** column seen on the [Filtering page](https://manage.searchspring.net/management/filtering). \n\n* list (default)\n* grid\n* palette\n* hierarchy\n* slider";
                            };
                            readonly multiple: {
                                readonly type: "string";
                                readonly description: "The value configured in the dropdown under the **Selection** column on the [Filtering page](https://manage.searchspring.net/management/filtering). Below is a map of the values seen on the [Filtering page](https://manage.searchspring.net/management/filtering) and how they are returned in the API response.\n\n* Default: Select Multiple - OR => NULL or \"\"\n * Select One => single\n* Select Multiple - AND => multiple-intersect\n* Select Multiple - OR => multiple-union";
                            };
                            readonly collapse: {
                                readonly type: "integer";
                                readonly description: "The value returned within the ***collapse*** property represents if a facet should be collapsed or not when the page loads. \n\n* Expanded => 0 \n* Collapsed => 1";
                            };
                            readonly facet_active: {
                                readonly type: "integer";
                                readonly description: "Will determine if the facet is currently being used to filter results. The values returned are boolean values in the form of 0 and 1. \n\n* Expanded => 0 (default)\n* Collapsed => 1";
                            };
                            readonly values: {
                                readonly type: "array";
                                readonly description: "An array of objects that represent each available filter value for a facet. The amount of values returned can be modified under the ***Max*** column on the [Filtering page](https://manage.searchspring.net/management/filtering).";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "";
                                    readonly properties: {
                                        readonly active: {
                                            readonly type: "boolean";
                                            readonly description: "If there are not any filter parameters applied to the API request, then all filters should by default be false. If a filter parameter is applied to the API request, then the filter that is in use will have an ***active*** value of ***true***.";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Will always by default be ***value*** unless the filter is configured to have values be a Filter Range. If a filter is configured to have it's values returned as a filter range then the type will be ***range***. To use filter ranges see this documentation for [Filtering](https://searchspring.zendesk.com/hc/en-us/articles/201184909) under the Ranges section for more information.";
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly description: "Will be the value returned by the API. This is used to pass as the value when a shopper applies a background filter, filter, or sort parameter to the API request. The ***value*** key will not be returned if a filter has a ***type*** key with a value of ***range***, ***low*** and ***high*** will be returned in it's place.";
                                        };
                                        readonly low: {
                                            readonly type: "string";
                                            readonly description: "If a filter has it's type returned as ***range***, this value will be used in place of the value returned in the ***value*** key. Low is only usable for background filter and filter parameters applied to the API request. The low value passed will dictate the beginning of the range in the returned result set.";
                                        };
                                        readonly high: {
                                            readonly type: "string";
                                            readonly description: "If a filter has it's type returned as ***range***, this value will be used in place of the value returned in the ***value*** key. High is only usable for background filter and filter parameters applied to the API request. The high value passed will dictate the end of the range in the returned result set.";
                                        };
                                        readonly label: {
                                            readonly type: "string";
                                            readonly description: "Label returned for a filter value is what will be displayed on the frontend of the site. The label can only be changed if the values are configured to be returned as a Filter Range.";
                                        };
                                        readonly count: {
                                            readonly type: "integer";
                                            readonly description: "Count will determine the amount of results that have the same value for the filter field.";
                                        };
                                    };
                                };
                            };
                            readonly hierarchyDelimiter: {
                                readonly type: "string";
                                readonly description: "Will be returned for a facet if the facets Display on the [Filtering page](https://manage.searchspring.net/management/filtering) is configured as a Hierarchy. The way to change the value is by navigating to and clicking on the Advanced section and setting the Hierarcy Delimiter in the dropdown. The value passed as the delimiter(separator) will tell the API to separate the filter values by that value. \n\n* **/** (default)\n* **>** \n* **~**\n* **:**\n* **,**\n* **#** ";
                            };
                            readonly step: {
                                readonly type: "integer";
                                readonly description: "Will be returned for a facet if the facets Display on the [Filtering page](https://manage.searchspring.net/management/filtering) is configured as a slider. The value here will determine how much the slider will increment when the shopper slides the slider one space. This value is dynamically calculated based on the range of data for the configured field returned in the API response.";
                            };
                            readonly active: {
                                readonly type: "array";
                                readonly description: "Will be returned for a facet if the facets Display on the [Filtering page](https://manage.searchspring.net/management/filtering) is configured as a slider. The two values returned here will determine the available lowest and highest possible values for the field based on the relevant product data returned by the API.";
                                readonly items: {};
                            };
                            readonly range: {
                                readonly type: "array";
                                readonly description: "Will be returned for a facet if the facets Display on the [Filtering page](https://manage.searchspring.net/management/filtering) is configured as a slider. The two values returned here will determine the available lowest and highest possible values for the field based on the relevant product data returned by the API.";
                                readonly items: {};
                            };
                            readonly format: {
                                readonly type: "string";
                                readonly description: "Will be returned for a facet if the facets Display on the [Filtering page](https://manage.searchspring.net/management/filtering) is configured as a slider. The way to change the format is by navigating to and clicking on ***Advanced*** and either changing the default Custom format($%01.2f - $%01.2f) or selecting a commonly used format in the available dropdown.\n\n* $25.35 - $48.50\n* 12 - 25\n* 13.50 - 18.75\n* 8.5 - 12.5\n* $%01.2f - $%01.2f (default)";
                            };
                        };
                    };
                };
                readonly breadcrumbs: {
                    readonly title: "Breadcrumbs";
                    readonly type: "object";
                    readonly description: "Array of objects representing breadcrumbs for the current search result. If a query parameter is passed a value will be populated to indicate that a search has been made. However, if a single filter parameter is applied it will not be reflected until a secondary filter is applied.";
                    readonly properties: {
                        readonly field: {
                            readonly type: "string";
                            readonly description: "Active field that is used to filter results by. This will not be populated if only one filter is applied.";
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly description: "Label for the current breadcrumb with both the field name and value.";
                        };
                        readonly filterLabel: {
                            readonly type: "string";
                            readonly description: "Configured label to be used as the display value for the filter.";
                        };
                        readonly filterValue: {
                            readonly type: "string";
                            readonly description: "Label for the breadcrumb with the current active filter value that is filtering the search results returned.";
                        };
                        readonly removeFilters: {
                            readonly type: "string";
                            readonly description: "Array of objects representing the filters that should be removed when the current breadcrumb is clicked.";
                        };
                        readonly removeRefineQuery: {
                            readonly type: "string";
                            readonly description: "Array of refine queries that should be removed when the current breadcrumb is clicked.";
                        };
                    };
                };
                readonly filterSummary: {
                    readonly title: "Filter Summary";
                    readonly type: "object";
                    readonly description: "Each object returned within the filterSummary array will represent a filter that is currently in use to filter the result set by. Currently if a filter's Display is set as Hierarchy and if it is applied, it's usage will not be reflected in filterSummary. If a Hierarchy filter is active it will be reflected in the breadcrumbs array.";
                    readonly properties: {
                        readonly field: {
                            readonly type: "string";
                            readonly description: "Active field in use that is filtering the result set.";
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Passed as the filter parameter value in the API request to filter results by.";
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly description: "Concatenated value of the filter label and the filter value in use.";
                        };
                        readonly filterLabel: {
                            readonly type: "string";
                            readonly description: "Configured label to be used as the display value for the filter.";
                        };
                        readonly filterValue: {
                            readonly type: "string";
                            readonly description: "Passed as the filter parameter value in the API request to filter results by.";
                        };
                    };
                };
                readonly merchandising: {
                    readonly title: "Merchandising";
                    readonly type: "object";
                    readonly description: "Will return an array of objects that represent the data configured in merchandising campaigns and will also return a redirect if configured.";
                    readonly properties: {
                        readonly redirect: {
                            readonly type: "string";
                            readonly description: "If a redirect is configured on the redirect page in the Searchspring Management Console and the ***q*** parameter value matches the configuration, then the configured redirect URL will be returned here.";
                        };
                        readonly is_elevated: {
                            readonly type: "array";
                            readonly description: "If products are elevated by IntelliSuggest an array of Searchspring ID's will be returned here. These ID's will match the first products returned in the ***results*** array.";
                            readonly items: {};
                        };
                        readonly elevated: {
                            readonly type: "array";
                            readonly description: "If products are pinned in a triggered merchandising campaign, an array of Searchspring ID's will be returned here. These ID's will match the first products returned in the ***results*** array.";
                            readonly items: {};
                        };
                        readonly removed: {
                            readonly type: "array";
                            readonly description: "If products are removed from a triggered merchandising campaign, an array of Searchspring ID's will be returned here. These ID's will match the products that will not be returned in the ***results*** array.";
                            readonly items: {};
                        };
                        readonly content: {
                            readonly type: "object";
                            readonly description: "If merchandising banners are configured in a triggered merchandising campaign, they will be returned here as a script that can be added to the page to render the configured banner on the site.";
                            readonly properties: {
                                readonly header: {
                                    readonly type: "array";
                                    readonly description: "Primary banner to be used on the page typically this is used above the page content below the navigation bar.";
                                    readonly items: {};
                                };
                                readonly banner: {
                                    readonly type: "array";
                                    readonly description: "Secondary or sub header banner to be used on the page below the primary banner and above the page content.";
                                    readonly items: {};
                                };
                                readonly footer: {
                                    readonly type: "array";
                                    readonly description: "Banner to be used at the end of the page content.";
                                    readonly items: {};
                                };
                                readonly left: {
                                    readonly type: "array";
                                    readonly description: "Banner that used below the filters if the filters are left aligned, but is not limited to that orientation.";
                                    readonly items: {};
                                };
                                readonly inline: {
                                    readonly type: "object";
                                    readonly description: "Will be returned as an array of objects. There are currently only a maximum of four inline banners that can be configured for a campaign. Each object will contain the banner content within the ***value*** key, and the configured position of the inline banner within the results is returned within ***config.position.index***.";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                            readonly description: "Will reflect the configured banner content in the merchandising campaign.";
                                        };
                                        readonly config: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly position: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly index: {
                                                            readonly type: "integer";
                                                            readonly description: "Will reflect the configured position of the inline banner in the campaign. Position is determined by a zero-based index and will determine where the banner position should be rendered within the search results.";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly facets: {
                            readonly type: "array";
                            readonly description: "Will represent the facets/filters that are configured to have a specific order in the merchandising campaign.";
                            readonly items: {};
                        };
                        readonly facetsHide: {
                            readonly type: "array";
                            readonly description: "If facets/filters are configured to be hidden in a triggered merchandising campaign they will be returned here.";
                            readonly items: {};
                        };
                        readonly experiments: {
                            readonly type: "object";
                            readonly description: "If the triggered merchandising campaign is apart of an active A/B experiment, then data will be returned in this array.";
                            readonly properties: {
                                readonly parentCampaignId: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the ID of the merchandising campaign the experiment is being run on.";
                                };
                                readonly experimentId: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the unique ID of the experiment affecting the API response.";
                                };
                                readonly variationId: {
                                    readonly type: "string";
                                    readonly description: "ID of the variation being run within this experiment. This is uniquely tied to the campaignId.";
                                };
                                readonly campaignId: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the specific campaign configuration being used for the current variation.";
                                };
                                readonly parentCampaignName: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the name of the merchandising campaign the experiment is being run on.";
                                };
                                readonly variationName: {
                                    readonly type: "string";
                                    readonly description: "Will reflect if the triggered experimental campaign variation is either the A or B variation.";
                                };
                            };
                        };
                        readonly triggeredCampaigns: {
                            readonly type: "object";
                            readonly description: "An array of objects will be returned for the triggeredCampaigns array if values passed in a Search API request matches the context of a configured merchandising campaign. Typically an account will have a Global merchandising campaign setup, if one is then the Global merchandising campaign will always be returned within triggeredCampaigns along with any other campaigns that have a match.";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the unique ID for the campaign configured in the Searchspring Management Console on the [Merchandising page](https://manage.searchspring.net/management/visual-merchandising).";
                                };
                                readonly title: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the name of the triggered campaign configured in the Searchspring Management Console on the [Merchandising page](https://manage.searchspring.net/management/visual-merchandising).";
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "Will reflect the campaign type that is configured for the campaign in the Searchspring Management Console on the [Merchandising page](https://manage.searchspring.net/management/visual-merchandising).";
                                };
                            };
                        };
                    };
                };
                readonly didYouMean: {
                    readonly title: "Did You Mean";
                    readonly type: "object";
                    readonly description: "An object representing a spelling suggestion for the current search result. Only included for results with no results.";
                    readonly properties: {
                        readonly query: {
                            readonly type: "string";
                            readonly description: "The suggested query after spelling correction.";
                        };
                        readonly highlighted: {
                            readonly type: "string";
                            readonly description: "The suggested query with the spelling changes highlighted by being wrapped in <em> elements.";
                        };
                    };
                };
                readonly query: {
                    readonly title: "query";
                    readonly type: "object";
                    readonly description: "Will be returned if [Expanded Search](https://searchspring.zendesk.com/hc/en-us/articles/360050242531-Expanded-Search) or Integrated Spell Correction are enabled and the feature is triggered. Integrated Spell Correction will attempt to correct a term if the 'q' parameter value is longer than four characters. Speak with your Customer Success Manager for more information about these features.";
                    readonly properties: {
                        readonly matchType: {
                            readonly type: "string";
                            readonly description: "Indicates the type of search matching that was required for this search. Will return ***expanded*** when an Expanded Search is applied after finding zero results for the initial strict search.";
                        };
                        readonly original: {
                            readonly type: "string";
                            readonly description: "If integrated spell correction occurs, will return the original incorrect query that was passed as the ***q*** request parameter.";
                        };
                        readonly corrected: {
                            readonly type: "string";
                            readonly description: "If integrated spell correction occurs, will return the corrected query. Returned results will reflect the ***corrected*** value.";
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { GetSearch };
