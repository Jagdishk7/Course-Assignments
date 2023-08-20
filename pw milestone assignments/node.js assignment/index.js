const fs = require('fs');

// Task - 2 -------------------------------------------------------
fs.writeFile(
  'nodejs_architecture.txt',
  `Node.js is a platform that utilizes Javascript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications or multimedia streaming websites. The platform is constructed using Google Chrom's V8 Javascript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the applications resources over the internet.`,
  (err) => {
    if (err) console.log(err);
    console.log('File has written successfully');
  }
);

//Task - 3 -------------------------------------------------------

fs.readFile('nodejs_architecture.txt', (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});

// Task - 4 -------------------------------------------------------
fs.appendFile(
  'nodejs_architecture.txt',
  'Compared to other server side languages, Node.js has distinct advantages. Its asynchronous model and non blocking I/0 operations improve the scalability and performance of a web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, It is highly scalable and provides high performance. Node js is also felxible with multipple frameworks and makes the development process easier. Compared to other server side languages, Node js has distinct advantage. Its asynchronous model and non blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requess without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and  makes the development process easier.',
  (err) => {
    if (err) console.log(err);
    console.log('File appended successfully.');
  }
);

// Task - 5 -------------------------------------------------------
fs.unlink('nodejs_architecture.txt', (err) => {
  if (err) console.log(err);
  console.log('File deleted successfylly');
});

// Task - 6 -------------------------------------------------------
const os = require('os');
console.log(`Operating system name: ${os.type()}`);
console.log(`OS release: ${os.release()}`);

// Task - 7 -------------------------------------------------------
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/')
    return res.write(
      '<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>'
    );
});

// server.listen(3000);
// console.log('Server started listening to port 3000');

// Task - 8 -------------------------------------------------------
const eventEmitter = require('events');
const event = new eventEmitter();
event.on('subscribe', () => {
  console.log("Congratulations! You've subscribed to College wallah!");
});
event.emit('subscribe');

// Task - 9 -------------------------------------------------------
event.on('unsubscribe');
event.emit('ubsubscribe'); // IF WE REMOVE THE HANDLER IT WILL THROW AN ERROR `The "listener" argument must be of type function. Received undefined`

// Task - 10 -------------------------------------------------------
console.log(
  'The default maximum number of event listeners are: ',
  event.getMaxListeners()
);
event.setMaxListeners(5);
console.log(
  'The updated maximum number of event listeners are',
  event.getMaxListeners()
);
