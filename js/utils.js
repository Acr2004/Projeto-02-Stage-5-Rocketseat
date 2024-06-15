export function isNotNumber(number) {
    return isNaN(number) || number == "";
}

export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}