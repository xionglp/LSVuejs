import dayjs from "dayjs"

export default function directiveFormatTime(app) {
  app.directive("ftime",{
    mounted(el, binding) {
      // 1.获取时间的时分秒，转化成毫秒
      let timestamp = el.textContent
      if (timestamp.length === 10) {
        timestamp = timestamp * 1000
      }

      timestamp = Number(timestamp)

      // 2.获取传入的参数
      let format = binding.value
      if (!format) {
        format = "YYYY-MM-DD HH:mm:ss"
      }

      // 对时间进行格式化
      el.textContent = dayjs(timestamp).format(format)
    }
  })
}