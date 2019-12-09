type Inv = [number, string];

const updateInventory = (curInv: Inv[], newInv: Inv[]) => {
	const gHash = {}

	curInv.forEach(el => gHash[el[1]] = el[0]);
    newInv.forEach(el => {
		const [value, key] = el
		gHash[key] = gHash[key] ? gHash[key] + value :  value
	})

	return Object.keys(gHash).map(key => [gHash[key], key]) //toDO: sort
};
