// select screen height
var selectScreenHeight = window.innerHeight - document.getElementById('selectTopBar').offsetHeight;
document.getElementById('selectScreen').style.height = selectScreenHeight + "px";
document.getElementById('selectList').style.height = (selectScreenHeight - 20) + "px";// Number = top/bottom padding

// parse Track.json
var trackObj = JSON.parse(prompt("기술적인 한계로 아직은 파일 입출력을 지원하지 않아 수동으로 데이터를 입력해야 합니다.\nTrack.json에 들어 있는 내용 전부를 복사하여 붙여넣고 확인 버튼을 누르세요."));

// Back to index.html
function gotoHome() {
	if(confirm("게임을 종료하고 초기 화면으로 돌아갈까요?")) {
		window.location.replace("index.html");
	}
}

// Go to Settings.html
function gotoSettings() {
	window.location.href = "settings.html";
}