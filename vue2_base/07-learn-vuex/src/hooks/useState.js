import { computed } from "vue";
import { useStore, mapState, createNamespacedHelpers } from "vuex";

export function useState(moduleName, mapper) {
  let mapFn = mapState;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapFn = createNamespacedHelpers(moduleName).mapState
  } else {
    mapper = moduleName
  }

  const store = useStore();
  const storeStateFns = mapFn(mapper);

  const storeState = {};
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store});
    storeState[fnKey] = computed(fn);
  })
  return storeState;
}

