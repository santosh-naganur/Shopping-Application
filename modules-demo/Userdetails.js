const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
  rl.question('Please enter your age: ', (age) => {
    rl.question('Please enter your email: ', (email) => {
        rl.question('Please enter your password:', (password) => {
            rl.question('Please enter your mobileno: ', (mobileno) => {
      console.log(`Hello, ${name}
       Your age is ${age}
        your email is ${email}
        your password is ${password}
        your mobileno is ${mobileno}`);
      rl.close();
    });
  });
});
  });
});
rl.on('close', function() {
  console.log('Exiting the program...');
  process.exit(0);
});