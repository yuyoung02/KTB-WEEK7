// NOTE: 밑변의 길이가 9인 이등변 삼각형 출력
for(let i = 0 ; i < 5 ; i++){
    // 공백
    for(let j = 4 ; j > i ; j --){
        process.stdout.write(" "); // 개행 없이 출력하는 메소드
    }

    // 별
    for(let k = 1 ; k <= (2*i)+1 ; k++){
        process.stdout.write("*");
    }
    console.log();
}
