<script>

var count= 2;

function validate()
{
	var un = document.index.username.value;
	var pw = document.index.password.value;
	var valid = false;
	var usernameArray = ["Nishant", "Nk"];
	var passwordArray = ["12345", "54321"];
	for (var i = 0; i < usernameArray.length; i++)
 {

	if ((un == usernameArray[i]) && (pw == passwordArray[i]))
	{
		valid = true;
		break;
	}
}
	if (valid)
	{

		window.location = "home.html";


		return false;
	}
	var again = " tries";
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Wrong password or username")
		count--;
	}
	else
	{
		alert("Incorrect password or username you are now blocked");
		document.login.username.value = "Reload the page";
		document.login.password.value = " ";
		document.login.username.disabled = true;
		document.login.password.disabled = true;
		return false;
	}
}

</script>
