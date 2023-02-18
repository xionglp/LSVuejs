import { ref } from "vue"

export default function useCounter() {
    //1. 定义counter数据
    const counter = ref(100)
    const increment = () => {
      counter.value++
    }

    const decrement = () => {
      counter.value--
    }

    return {
      counter,
      increment,
      decrement
    }
}