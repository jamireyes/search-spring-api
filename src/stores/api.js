import { defineStore } from "pinia";
import axios from "axios";

export const useApiStore = defineStore("api", {
    state: () => {
        return {
            params: "",
            pagination: "",
            results: "",
        };
    },
    actions: {
        async search(query) {
            const config = {
                siteId: "scmq7n",
                resultsFormat: "native",
            };

            let params = { ...config, ...this.params };

            params = { ...params, ...query };
            this.params = params;

            try {
                await axios
                    .get(
                        `https://${params.siteId}.a.searchspring.io/api/search/search.json`,
                        { params }
                    )
                    .then((response) => {
                        this.pagination = response && response.data.pagination;
                        this.results = response && response.data.results;
                    });
            } catch (error) {
                console.error("Error: ", error);
            }
        },
    },
});
