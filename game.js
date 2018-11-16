// select screen height
var selectScreenHeight = window.innerHeight - document.getElementById('selectTopBar').offsetHeight;
document.getElementById('selectScreen').style.height = selectScreenHeight + "px";
document.getElementById('selectList').style.height = (selectScreenHeight - 20) + "px";// Number = top/bottom padding

// Back to index.html
function gotoHome() {
	if(confirm("게임을 종료하고 초기 화면으로 돌아갈까요?")) {
		window.location.replace("index.html");
	}
}