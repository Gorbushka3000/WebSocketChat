document.addEventListener('DOMContentLoaded', function(){

    const messagesContainer = document.querySelector('#message_out');
    const messageIn = document.querySelector('[name = message_in]');
    const sendMessage = document.querySelector('[name = send_message]');

    let websocketClient = new WebSocket('ws://localhost:3060');


    websocketClient.onopen = () => {
        console.log("Client connected");

        sendMessage.onclick = () => {
            websocketClient.send(messageIn.value);
            messageIn.value = "";
        };
    };

    websocketClient.onmessage = (message) => {
        const newMessage = document.createElement('div');
        newMessage.innerHTML = message.data;
        messagesContainer.appendChild(newMessage);
    };


}, false);