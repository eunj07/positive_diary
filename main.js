// js의 한줄 주석
/* js의 여러줄 주석
*/ 
// 전역변수
let diary =""
// 함수정의
function SaveHandler(){
    // 사용자가 웹페이지에서 입력한 값을 메모리에 저장
    let date = $("#date").val()
    let text = $("#text").val()
    let mood = $("#mood").val()
    
    // 예외처리
    if (date == "") {
        alert("날짜를 선택하세요")
    }
    if (text == "") {
        alert("긍정확언을 입력하세요")
        return false
    }
    

    // 입력한 값을 한 문장으로 만들기

    diary = `<p>${date}: ${text} - ${mood} </p>` + diary;
    // console.log(diary) : 데이터가 잘 들어갔나 확인하기 위함
    $("#result").html(diary)

    localStorage.setItem("diary", diary);
    // let storage1 = localStorage.getItem("diary");
    // console.log(storage1)

    $("#date").val("");
    $("#text").val("");

}
// 스토리지 테스트
// localStorage.setItem("test-key", "테스트입니다");
// let storage1 = localStorage.getItem("test-key");
// console.log(storage1)

// jquery 실행 시작
$(document).ready(function() {
    
    // 문서가 로딩되면 로컬 저장소에 있는 긍정확언 불러오기
    diary = localStorage.getItem("diary");
    
    if (diary == null) {
        diary = "";
    }

    // id가 save로 정의된 요소를 클릭했을 때, SaveHandler 호출
    $("#save").click(SaveHandler)
})