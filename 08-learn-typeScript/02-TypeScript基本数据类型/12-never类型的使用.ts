function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log("string方式处理message")
      break;
    case 'number':
      console.log("number方式处理message")
      break;
    case 'boolean':
      console.log("boolean方式处理message")
      break;
    default:
      const check: never = message
      break;
  }
}

handleMessage("abc")
handleMessage(123)
handleMessage(true)

export {}