const amqplib = require("amqplib");
const { v4: uuid } = require("uuid");

let amqplibConnetction = null;

const getChannel = async () => {
    if (amqplibConnetction == null) {
        amqplibConnetction = await amqplib.connect("amqp://localhost");
    }
    return await amqplibConnetction.createChannel();
}

const expensiveDBOperation = (payload, fakeResponse) => {}

const RPCObserver = async (RPC_QUEUE_NAME, fakeResponse) => {
    const channel = await getChannel();
    await channel.assertQueue(RPC_QUEUE_NAME, {
        durable: false
    });

    channel.prefetch(1);
}

const requestData = async (RPC_QUEUE_NAME, requestPayload, uuid) => {}