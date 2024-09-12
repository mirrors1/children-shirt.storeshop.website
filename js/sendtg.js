
document.getElementById('order_form_new').addEventListener('submit', function(e) {
    e.preventDefault();

    const token = '7379453969:AAHbbqDAHmtO3H3ZfcMruEBBBAWFsDWCp44';
    const chatId = '-1002214124726';
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const text = `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

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
            alert('Сообщение отправлено!');
        } else {
            alert('Ошибка при отправке сообщения');
        }
    })
    .catch(error => {
        alert('Ошибка при отправке сообщения');
        console.error('Error:', error);
    });
});