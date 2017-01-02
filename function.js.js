function add()
{
	console.log('function definition')
}
add();
var add =function()
{
	console.log('function declaration')
}
add();
(
	function add()
	{
		alert('invoked function')
	})()