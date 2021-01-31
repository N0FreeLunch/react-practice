function logActivity(name="홍길동", activity="테니스") {
  console.log(`${name}은 ${activity}를 좋아합니다.`)
}

var defaultPerson = {
  name : {
    first : "길동",
    last : "홍"
  },
  favActivity : "테니스"
}

function logActivity(p=defaultPerson) {
  console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`)
}
