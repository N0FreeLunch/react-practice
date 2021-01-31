var log = function (message) {
  console.log(message)
}

log("variable inserted function?");

const _log = message => console.log(message)
_log("variable inserted function");


const obj = {
  message : "object inserted function",
  log(message) {
    console.log(message)
  }
}

obj.log(obj.message)


const message = [
  "array inserted function",
  messagee => console.log(message),
  "other kind element mixed array",
  message => console.log(message)
]

message[1](message[0]);
message[3](message[2]);

const insideFn = logger => logger("argument")
