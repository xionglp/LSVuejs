import { ref, watch } from "vue"

export default function(title = "默认title") {
  const titleRef = ref(title)

  watch(titleRef, (newValue) => {
    console.log(newValue)
    document.title = newValue
  }, {
    immediate: true, // watch惰性的
  })

  return {
    titleRef
  }
}