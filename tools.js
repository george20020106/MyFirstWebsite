const pw1 = 'super mario maker2';
const pw2 = '00000000';
const pw3 = '9876543210';

const index = document.querySelector('.index'); //select what do you want to do................................


const guessFun = document.querySelector("#guess_number"); //猜數字..........................................

function checkGuess() {
	let count = 1;
	const randomNum = Math.floor(Math.random() * 100) + 1;
	console.log(randomNum);
	let onceTime = "";

	let ans = Number(window.prompt("請輸入1~100的數字 : "));
	if  (!ans) return;

	while (Number.isNaN(ans)) {
		window.alert("請輸入數字");
		ans = Number(window.prompt("請輸入1~100的數字 : "));
		if (!ans) return;
	}

	while (ans != randomNum) {
		if (!ans) return;

		else if (ans > randomNum) {
			alert("太大了");
			ans = Number(window.prompt("請輸入1~100的數字 : "));
			count++;
		}
		else if (ans < randomNum) {
			alert("太小了");
			ans = Number(window.prompt("請輸入1~100的數字 : "));
			count++;
		}
	}
	if (Number(count) == 1) onceTime = "，真厲害";
	alert(`恭喜，你用了${count}次${onceTime}`);
	
}
/*
*
*
*
*
*
*/


const cauculator = document.querySelector("#cauculator"); //計算機 button.....................................
const calc = document.querySelector('.calc');             //       tab
const calc1 = document.querySelector('input');
const calc2 = document.querySelector('#calcInput2'); // enter number
const calcSubmit = document.querySelector('.calc #submit'); // submit button
const chooseOp = document.getElementsByName('chooseOp'); // choose the operator
function handleCauculator() {
	index.style.display = 'none';
	setTimeout(() => {
		calc.style.display = 'block';
	}, 100);
	calcSubmit.addEventListener('click', function() {
		try {
			let result = 0;
			if (chooseOp[0].checked)      result = Number(calc1.value) + Number(calc2.value);
			else if (chooseOp[1].checked) result = Number(calc1.value) - Number(calc2.value); 
			else if (chooseOp[2].checked) result = Number(calc1.value) * Number(calc2.value); 
			else if (chooseOp[3].checked) result = Number(calc1.value) / Number(calc2.value); 
			alert(result);
		}
		catch(error) {
			alert(`錯誤! ${error}`);
			location.reload();
		}
		
	});
}
/*
 * 
 * 
 * 
 */
const both_factor = document.querySelector('#both_factor');

const secret = document.querySelector('#secret'); // 秘密...................................................
function handleSecret() {
	let usersEnter = prompt('輸入密碼');
	if (!usersEnter) return;
	else if (usersEnter == pw1) {
		alert('Correct!');
	}
	else if (usersEnter == pw2) {
		alert('Boo!');
	}
	else if (usersEnter == pw3) {
		alert('Ha!');
	}
	else alert('Nope!');

}
/*
 * 
 * 
 * 
 */
const find_factor = document.querySelector('#find_factor');
function handleFactor() {
	let usersEnter = Number(prompt('請輸入數字'));
	let result = "";

	if (!String(usersEnter)) return;

	while (usersEnter <= 0 || Math.floor(usersEnter) != usersEnter) {
		alert('請輸入正整數');
		usersEnter = Number(prompt('請輸入數字'));
	}
	while (usersEnter > 2000) {
		alert('請輸入小於2000的整數');
		usersEnter = Number(prompt('請輸入數字'));
	}
	
	for (let i = 1; i <= usersEnter; i++) {
		if (i = 1) result += i;
		else if (usersEnter % i == 0) result += `, ${i}`;
	}
	alert(result);
}

/*
 * addEventListener part................................................................................
 */
guessFun.addEventListener("click", checkGuess, false);
cauculator.addEventListener("click", handleCauculator, false);
secret.addEventListener('click', handleSecret, false);
find_factor.addEventListener('click', handleFactor, false);
