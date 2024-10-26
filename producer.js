const amqp = require('amqplib');

const queue = 'hello';

async function sendMessage() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        
        await channel.assertQueue(queue, {
            durable: false
        });

        const msg = 'Hello RabbitMQ!';
        
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(`Sent: ${msg}`);

        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

sendMessage();