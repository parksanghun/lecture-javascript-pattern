var iScore = window.prompt("1~100사이의 점수를 입력하세요.", 0)
var getScore = function() {
    var grade = "F";
    var score = iScore / 10;
    switch (score) {
        case 10: case 9:
            grade = "A";
            break;
        case 8:
            grade = "B";
            break;
        case 7:
            grade = "C";
            break;
        case 6:
            grade = "D";
            break;
    }
    return grade;
}