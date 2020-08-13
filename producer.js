const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const start = async function() {
    await producer.connect()
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello from producer!' },
      ],
    })
    
    await producer.disconnect()
}

start();
