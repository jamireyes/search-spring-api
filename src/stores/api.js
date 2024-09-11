import { defineStore } from "pinia";
import axios from "axios";

export const useApiStore = defineStore("api", {
    state: () => {
        return {
            query: "",
            pagination: "",
            sorting: "",
            breadcrumbs: "",
            results: "",
        };
    },
    actions: {
        async search(query, page) {
            this.query = query && query;

            const params = {
                siteId: "scmq7n",
                resultsFormat: "native",
                q: query,
                page: page,
            };

            try {
                const response = await axios.get(
                    "https://api.searchspring.net/api/search/search.json",
                    { params }
                );
                this.pagination = response && response.data.pagination;
                this.sorting = response && response.data.sorting;
                this.breadcrumbs = response && response.data.breadcrumbs;
                this.results = response && response.data.results;
                console.log(response);
            } catch (error) {
                console.error("Error: ", error);
            }
        },
    },
});
