
const os =require('os');

console.log(os.platform()); // Output: win32 (for Windows)

console.log(os.arch()); // Output: x64 (for 64-bit architecture)

console.log(os.cpus()); // Output: Array of CPU objects

console.log(os.totalmem()); // Output: 8589934592 (for 8 GB of memory)

console.log(os.freemem()); // Output: 4352327680 (for 4.05 GB of free memory)

console.log(os.hostname()); // Output: MyComputer

console.log(os.networkInterfaces()); // Output: Object with network interface information

console.log(os.freemem());

console.log(os.homedir());

