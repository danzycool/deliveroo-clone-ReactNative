const formatter = (num) => {
    return num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export default formatter;