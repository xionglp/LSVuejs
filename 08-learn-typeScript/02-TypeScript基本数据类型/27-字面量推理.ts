
type Method = 'GET' | 'POST';
function request(url: string, method: Method) {
  console.log(method)
}

const options = {
  url: "https://www.corderwhy.org/aaa",
  method: "POST"
} as const

request(options.url, options.method)

export {}