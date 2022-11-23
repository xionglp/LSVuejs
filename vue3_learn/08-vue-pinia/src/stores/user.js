import { defineStore } from "pinia";

const useUser = defineStore("user", {
  state: () => ({
    name: "xionglp",
    age: 18,
    level: 13
  })
})

export default useUser