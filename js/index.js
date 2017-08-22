$(document).ready(function(){
	var outputField = $(".output");

	var arrayCharacters = [];
	var arraySigns = [];
	var output = [0];
	outputField.html(output[0]);
	output = [];

	$("#one").click(function(){
		arrayCharacters.push(1);
		output.push(1);
		output.join("");
		outputField.html(output);
	});
	$("#two").click(function(){
		arrayCharacters.push(2);
		output.push(2);
		output.join("");
		outputField.html(output);
	});
	$("#three").click(function(){
		arrayCharacters.push(3);
		output.push(3);
		output.join("");
		outputField.html(output);
	});
	$("#four").click(function(){
		arrayCharacters.push(4);
		output.push(4);
		output.join("");
		outputField.html(output);
	});
	$("#five").click(function(){
		arrayCharacters.push(5);
		output.push(5);
		output.join("");
		outputField.html(output);
	});
	$("#six").click(function(){
		arrayCharacters.push(6);
		output.push(6);
		output.join("");
		outputField.html(output);
	});
	$("#seven").click(function(){
		arrayCharacters.push(7);
		output.push(7);
		output.join("");
		outputField.html(output);
	});
	$("#eight").click(function(){
		arrayCharacters.push(8);
		output.push(8);
		output.join("");
		outputField.html(output);
	});
	$("#nine").click(function(){
		arrayCharacters.push(9);
		output.push(9);
		output.join("");
		outputField.html(output);
	});
	$("#zero").click(function(){
		arrayCharacters.push(0);
		output.push(0);
		output.join("");
		outputField.html(output);
	});
	$("#divide").click(function(){
		arrayCharacters.push('/');
		output.push('/');
		output.join("");
		outputField.html(output);
	});
	$("#multiply").click(function(){
		arrayCharacters.push('*');
		output.push('*');
		output.join("");
		outputField.html(output);
	});
	$("#subtract").click(function(){
		arrayCharacters.push('-');
		output.push('-');
		output.join("");
		outputField.html(output);
	});
	$("#add").click(function(){
		arrayCharacters.push('+');
		output.push('+');
		output.join("");
		outputField.html(output);
	});
	$("#dot").click(function(){
		arrayCharacters.push('.');
		output.push('.');
		output.join("");
		outputField.html(output);
	});
	$("#clearAll").click(function(){
		arrayCharacters = [];
		output = [0];
		outputField.html(output);
		output = [];
	});
	$("#clearOne").click(function(){
		arrayCharacters.splice(arrayCharacters.length-1, 1);
		output.splice(arrayCharacters.length, 1);
		outputField.html(output);
	});

	$("#equals").click(function(){
		var result = eval(arrayCharacters.join(""));
		outputField.html(result);

	});


});