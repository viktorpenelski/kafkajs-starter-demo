# Simple producer-consumer using kafkajs

depends on
- npm / node
- docker / docker-compose

1. run `npm install`
2. run `docker-compose up`
3. start the consumer `node consumer.js` it should connect to the single-cluster local kafka installation
4. every time the producer is ran, the consumer should see a single new message `node producer.js`