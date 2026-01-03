
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total, rooms) {
    document.write('<tr>');
    document.write('<td class="painting"><img src="images/' + item.product.filename + '"></td>');
    document.write('<td>' + item.product.title + '</td>');
    document.write('<td class="center">' + rooms + '</td>');
    document.write('<td class="right">$' + item.product.price.toFixed(2) + '</td>');
    document.write('<td class="right">$' + total.toFixed(2) + '</td>');
    document.write('</tr>');
}

function calculateTax(subtotal, rate) {
    return subtotal * rate;
}

function calculateShipping(subtotal) {
    if (subtotal > 25000) return 0;
    return 1500;
}


function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}

function outputCurrency(num) {
    document.write("$" + num.toFixed(2));
}










