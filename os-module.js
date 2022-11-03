const os = require('os')

// info abt user
const user = os.userInfo()

// methods return system uptime in sec
console.log(`THe system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)