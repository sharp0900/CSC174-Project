
window.onload = function () { 

	var prebodyHTML="<table id='patient-info-header'><tr><td><img src='img/menu.png' align='middle' href='index.html' id='hamburger' onclick='openNav()'>CT# - <span id='ct-num'> 1234567890</span></td><td style='width:60%;'></td><td><img src='img/bell.png' align='middle' >	USER ID	<span id='user-id'>_________</span>	</tr></table>";
	
	/**
	*menu starts here
	*/
	
	var menuLinks=[
		{name:"Home",link:"home.html"},
		{name:"Add Patient",link:"addpatient.html"},
		{name:"Assign Provider",link:"assignprovider.php"},
		{name:"Assign Nurse",link:"assignnurse.php"},
		{name:"Search Patient", link:"searchPatient.php"},
		{name:"View Provider Table",link:"getproviderinfo.php"},
		{name:"View Patient Table", link:"getpatientinfo.php"},
	];
	
	prebodyHTML+="<div id='mySidenav' class='sidenav'><a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>";
	
	for(var i=0; i<menuLinks.length; i++){
		prebodyHTML+="<a href='"+menuLinks[i].link+"'>"+menuLinks[i].name+"</a>";
	}
	prebodyHTML+="</div>";
	var body=document.body.innerHTML;
	document.body.innerHTML=prebodyHTML+body;
	
	
	
};
/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

			/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
