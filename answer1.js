let allRead = true
let notifications = [
  { message: "Lorem", read: true },
  { message: "Ipsum", read: true },
  { message: "Dolor", read: true },
  { message: "Sit", read: false },
  { message: "Amet", read: true },
]

const isAllRead = (msg) => msg.read

allRead = notifications.every(isAllRead)

console.log(allRead) // false
