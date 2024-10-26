const amqp = require('amqplib');

const queue = 'hello';

async function receiveMessage() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        
        await channel.assertQueue(queue, {
            durable: false
        });

        console.log('Waiting for messages in %s. To exit press CTRL+C', queue);

        channel.consume(queue, (msg) => {
            console.log(`Received: ${msg.content.toString()}`);
        }, {
            noAck: true
        });
    } catch (error) {
        console.error('Error receiving message:', error);
    }
}

receiveMessage();