
var myform=document.getElementById('myform');


myform.addEventListener('submit',submitForm);

function submitForm(e){
	var username=document.getElementById('name').value;
	var useremail=document.getElementById('email').value;
	var userpass=document.getElementById('pwd').value;

	// console.log(username);
	// console.log(useremail);
	// console.log(userpass);
	if(!username || !useremail || !userpass){
		alert('Please Fill in the forms!');
		return false;
	}

	var formData={
		name:username,
		email:useremail,
		pass:userpass
	};
	// console.log(formData);

	if(localStorage.getItem('formDatas')===null){
		var formDatas=[];

		formDatas.push(formData);
		localStorage.setItem('formDatas',JSON.stringify(formDatas));

	}else{
		var formDatas=JSON.parse(localStorage.getItem('formDatas'));
		formDatas.push(formData);
		localStorage.setItem('formDatas',JSON.stringify(formDatas));
	}

	// console.log(formDatas);
	document.getElementById('myform').reset();
	fetchformDatas();
	

	// localStorage.setItem('test','hello');

	// console.log(localStorage.getItem('test'));
	// localStorage.remove('test');
	// console.log(localStorage.getItem('test'));

	e.preventDefault();
}

function deleteformData(usremail){
	// console.log(usrname);
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));
	for(var i=0; i<formDatas.length;i++){
		if(formDatas[i].email==usremail){
			formDatas.splice(i,1);
		}
	}
	localStorage.setItem('formDatas',JSON.stringify(formDatas));

	fetchformDatas();

}


function fetchformDatas(){
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));
	console.log(formDatas);

	var formResults=document.getElementById('form-result');

	formResults.innerHTML='';
	for(var i=0; i< formDatas.length; i++){
		var usrname=formDatas[i].name;
		var usremail= formDatas[i].email;
		var usrpass= formDatas[i].pass;
		// var deli=formDatas[i].;


		// formResults.innerHTML +='<div class="well">'+
		// 							'<p class="p-style">'+'<span> Name : '+usrname+'</span>'+'<br>'+'<span> Email : '+usremail+'<br>'+'</span>'+'<span> Password : '+usrpass+'</span>'+'<br>'+
		// 							'<a onclick="deleteformData(\''+deli+'\')" class="btn btn-danger" href="#">Delete</a>'+
		// 							'</p>'+
		// 						'</div>';

		formResults.innerHTML +='<div class="well">'+
									'<p class="p-style"> Name : '+usrname+'<br>'+' Email : '+usremail+'<br>'+'Password : '+usrpass+'<br>'+
									'<a onclick="deleteformData(\''+usremail+'\')" class="btn btn-danger" href="#">Delete</a>'+
									'</p>'+
								'</div>';
	}

}