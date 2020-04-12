type Inv = [number, string];

export const updateInventory = (curInv: Inv[], newInv: Inv[]) => {
	const gHash = {}

	curInv.forEach(el => gHash[el[1]] = el[0]);
    newInv.forEach(el => {
		const [value, key] = el
		gHash[key] = gHash[key] ? gHash[key] + value :  value
	})

	return Object.keys(gHash).map(key => [gHash[key], key]).sort((a, b) => sortFunction(a[1], b[1]))
};


export const sortFunction = (curName: string, newName: string) => {
	const nameOne = curName.toLocaleLowerCase()
	const nameTwo = newName.toLocaleLowerCase()

	return nameOne < nameTwo ? -1 : 1
}
