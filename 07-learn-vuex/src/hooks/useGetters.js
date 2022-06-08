import { computed } from "vue";
import { useStore, mapGetters, createNamespacedHelpers } from "vuex";

export function useGetters(moduleName ,mapper) {
  let mapFn = mapGetters;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapFn = createNamespacedHelpers(moduleName).mapGetters
  } else {
    mapper = moduleName
  }

  const store = useStore();
  const storeGettersFns = mapFn(mapper);
  const storeGetters = {};
  Object.keys(storeGettersFns).forEach(fnKey => {
    const fn = storeGettersFns[fnKey].bind({$store: store});
    storeGetters[fnKey] = computed(fn);
  })
  return storeGetters;
}

