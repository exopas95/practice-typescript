// 자바스크립트 파일을 import 하고 싶으면 d.ts 파일에 추상화해서 import할 수 있음
// 자바스클비트 파일을 변경하지 않고 타입스크립트의 보호를 받고 싶으면 @ts-check와 JSDoc를 사용하면 됨
// 그리고 주석으로 타입스크립트로 정보를 전달한다. 이 경우 주석이기 때문에 프로그램 실행에 아무런 문제가 없으면서
// 타입스크립트의 보호를 받을 수 있다.

//@ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}