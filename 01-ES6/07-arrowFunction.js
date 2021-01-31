var lordify = function (firstname) {
  return `켄터베리의 ${firstname}`
}

console.log(lordify("홍길동"));
console.log(lordify("홍길동"));


var lordify = firstname => `켄티베리의 ${firstname}`

console.log(lordify("홍길동"));
console.log(lordify("홍길동"));



var lordify = (firstName, land) => `${land}의 ${firstName}`

console.log(lordify("홍길동","브리즈번"));
console.log(lordify("홍길동","시드니"));


var lordify = function(firstName, land) {
  if (!firstName) {
    throw new Error('lordify에 이름을 넘겨야 합니다.'
  }
  if (!land) {
    throw new Error('영주에게는 영지가 있어야 합니다.')
  }

  return `${land}의 ${firstName}`
}


var lordify = (firstName, land) {
  if (!firstName) {
    throw new Error('lordify에 이름을 넘겨야 합니다.'
  }
  if (!land) {
    throw new Error('영주에게는 영지가 있어야 합니다.')
  }

  return `${land}의 ${firstName}`
}

console.log(lordify("홍길동", "멜버른"));
console.log(lordify("임꺽정")); // rrror
