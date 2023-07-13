const totalItems = (items: any) => {
    let sum = 0;
    for (const obj of items) {
        sum += obj.quantity;
    }
    return sum;
};

export default totalItems;