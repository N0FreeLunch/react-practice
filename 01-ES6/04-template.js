lastName = "hong"
middleName = "gil"
firstName = "dong"
console.log(lastName + "," + firstName+ ", ", + middleName)
console.log(`${lastName}, ${firstName}, ${middleName}`)

const qty = 10
const eventName = "event"
const price = 12
const ticketAgent = "ticketAgent"

var message =
`
${firstName} 님께,
${eventName} 티켓 ${qty} 건을 구매해 주셔서 감사합니다.

주문 상세 정보:
${lastName} ${firstName} ${middleName}
${qty} x $${price} = $${qty*price} 공연 : ${eventName}

공연 시작 30분 전까지 배부처에서 티켓을 수령하시기 바랍니다.

감사합니다.

${ticketAgent} 드림

`
message
