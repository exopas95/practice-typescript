// 자바스크립트 패키지 & 모듈을 사용하기 위해서는 declaration 파일을 만들어주어야 한다.
// 여기서는 구현을 하지 않으며, 모두 타입만 선언한다.
interface Config {
    url: string
}

declare module "myPackage" {
    function init(config: Config): boolean;
}