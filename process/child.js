process.on('message', function(m) {
  console.log('CHILD got message:', m);
});
process.send({ foo: 'bar' });

# console.log 123