var save = true;

function goBacktoSelect() {
	if(!save) {
		if(confirm("저장하지 않은 내용이 있습니다. 돌아갈까요?")) {
			window.location.href = "select.html";
		}
	} else {
		window.location.href = "select.html";
	}
}