type DiffArray = Array<number>

const diff = (arr1: DiffArray, arr2: DiffArray) => [
	...arr1.filter(el => !arr2.includes(el)),
	...arr2.filter(el => !arr1.includes(el))
]

const sol = (...args) => [...new Set(args.reduce(diff))]
