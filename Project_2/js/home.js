function renderTable(rooms) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    let subtotal = 0;

    for (let item of cart) {
        let total = calculateTotal(rooms, item.product.price);
        subtotal += total;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="painting"><img src="images/${item.product.filename}" alt="${item.product.title}"></td>
            <td>${item.product.title}</td>
            <td class="center">${rooms}</td>
            <td class="right">$${item.product.price.toFixed(2)}</td>
            <td class="right">$${total.toFixed(2)}</td>
        `;
        tableBody.appendChild(tr);
    }

    const tax = calculateTax(subtotal, 0.19);
    const shipping = calculateShipping(subtotal);
    const grand = calculateGrandTotal(subtotal, tax, shipping);

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('grand').textContent = `$${grand.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const roomsInput = document.getElementById('rooms');
    let rooms = parseInt(roomsInput.value, 10) || 1;
    renderTable(rooms);

    roomsInput.addEventListener('input', function () {
        let value = parseInt(this.value, 10);
        if (isNaN(value) || value < 1) value = 1;
        renderTable(value);
    });
});
