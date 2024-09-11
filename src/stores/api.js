import { defineStore } from "pinia";
import axios from "axios";

export const useApiStore = defineStore("api", {
    state: () => {
        return {
            loading: false,
            query: "",
            pagination: "",
            results: "",
        };
    },
    actions: {
        async search(query, page) {
            this.query = query && query;
            this.loading = true;

            const params = {
                siteId: "scmq7n",
                resultsFormat: "native",
                q: query,
                page: page,
            };

            try {
                await axios
                    .get(
                        "https://api.searchspring.net/api/search/search.json",
                        { params }
                    )
                    .then((response) => {
                        this.loading = false;
                        this.pagination = response && response.data.pagination;
                        this.results = response && response.data.results;
                    });
            } catch (error) {
                console.error("Error: ", error);
            }
        },
    },
});
