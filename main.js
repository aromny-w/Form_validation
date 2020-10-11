let	formLog = document.querySelector("form.log");
let	formReg = document.querySelector("form.reg");
let	mailLog = formLog.querySelector("input[type=email]");
let	mailReg = formReg.querySelector("input[type=email]");
let	passLog = formLog.querySelector("input[type=password]");
let passNew = formLog.querySelector("u");
let	passReg = formReg.querySelectorAll("input[type=password]")[0];
let passSec = formReg.querySelectorAll("input[type=password]")[1];
let userAcc = new Object();

function switchTab()
{
	for (let elem of document.querySelectorAll(".log, .reg"))
	{
		if (elem.classList.contains("active"))
			elem.classList.remove("active");
		else
			elem.classList.add("active");
	}
}

for (let elem of document.getElementsByClassName("log"))
	elem.classList.add("active");

for (let tab of document.getElementsByTagName("button"))
	tab.onclick = () => !tab.classList.contains("active") && switchTab();

mailLog.onchange = () =>
{
	if (!mailLog.value || userAcc.hasOwnProperty(mailLog.value))
		mailLog.setCustomValidity("");
	else
		mailLog.setCustomValidity("Such account does not exist.");
}

passLog.onkeyup = () =>
{
	if (!passLog.value || userAcc[mailLog.value] == passLog.value)
		passLog.setCustomValidity("");
	else
		passLog.setCustomValidity("Invalid password.");
}

passNew.onclick = () =>
{
	let mail = prompt("Please provide your email");

	if (userAcc.hasOwnProperty(mail))
		alert(`Your password is: ${userAcc[mail]}`);
	else
		alert("No such email found.");
}

formLog.addEventListener("submit", function(event)
{
	const	link = "https://github.com/aromny-w";

	event.preventDefault();
	document.body.innerHTML = `<p>Thanks for using this form!\n
	More projects at: <a href=${link}>https://github.com/aromny-w</a></p>`;
	return false;
})

passReg.onchange = passSec.onkeyup = () =>
{
	if (!passReg.value || passReg.value == passSec.value)
		passSec.setCustomValidity("");
	else
		passSec.setCustomValidity("Please enter a matching password.");
}

formReg.addEventListener("submit", function(event)
{
	event.preventDefault();
	userAcc[mailReg.value] = passReg.value;
	alert(`A confirmation letter has been to: ${mailReg.value}. Not really.`);
	this.reset();
	switchTab();
})