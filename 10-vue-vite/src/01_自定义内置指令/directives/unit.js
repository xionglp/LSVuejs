export default function directiveUnit(app) {
  app.directive("unit", {
    mounted(el, binding) {
      const defaultText = el.textContent
      let unit = binding.value
      console.log(unit)
      if(!unit) {
        unit = "¥"
      }
      el.textContent = unit + defaultText
    }
  })
}