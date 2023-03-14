const { ImageType, searchPersonByName } = require("./node_modules/movier");
const movier = require("./node_modules/movier");
// console.dir(ImageType);
// console.dir(searchPersonByName("interstellar 2014"));
// console.dir(movier.getTitleDetailsByIMDBId("tt0816692"));
// movier.getPersonDetailsByName("jennifer lawrence");
// console.log(movier.getPersonDetailsByName("jennifer lawrence"));

function getDataPromise() {
  return new Promise(resolve => {
      setTimeout(function() {
          console.log('요청을 보냈습니다')
          const data = (movier.getPersonDetailsByName("jennifer lawrence")) // 데이터 도착
          resolve(data) // 내가 원하는 작업 시작
      },1000)
  })
}
let response = getDataPromise()
console.log(response) // Promise {<pending>} 상태가 출력됩니다.

getDataPromise()
  .then(response => console.log(response)) // 원하는 값인 data를 출력할 수 있습니다
