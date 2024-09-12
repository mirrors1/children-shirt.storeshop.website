
document.getElementById('order_form_new').addEventListener('submit', function(e) {
    e.preventDefault();

    const token = '7379453969:AAHbbqDAHmtO3H3ZfcMruEBBBAWFsDWCp44';
    const chatId = '-1002214124726';
    const Size = document.getElementById('select').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const text = `Розмір: ${Size}\nІм'я: ${name}\nТелефон: ${phone}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            пшк
        } else {
            alert('Помилка при надсиланні заявки');
        }
    })
    .catch(error => {
        alert('Помилка при надсиланні заявки');
        console.error('Error:', error);
    });
});