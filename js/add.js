function add(){
	const num1 = Number(document.getElementsByName("numDisp1")[0].value);
	const num2 = Number(document.getElementsByName("numDisp2")[0].value);
	const ans = num1 + num2;
	console.log(ans);
	document.getElementsByName("numDisp1")[0].value = ans;
}