import { defineStore } from "pinia";
import { watch } from "vue";

export const useSearchStore = defineStore("search", {
  state: () => ({
    selectedSeries: "/",
  }),
  actions: {
    reset() {
      this.selectedSeries = "/";
    },
    setSeries(value) {
      this.selectedSeries = value;
    },

    setupSeriesWatcher(router) {
      watch(
        //seletor 值轉換到 router cardlist/:series
        () => this.selectedSeries,
        (newVal) => {
          if (newVal !== "/") {
            router.push(`/card_wsr_frontend/cardlist/${newVal}`);
          }
        }
      );
    },
  },
});
