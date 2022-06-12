function printID(ids: string | number) {
  if (typeof ids === 'string') {
    console.log(ids.toUpperCase())
  } else {
    console.log(ids)
  }
}

printID("xionglp")
printID(123)

export {}