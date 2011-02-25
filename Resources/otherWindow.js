var otherWin = function(params){
	var win = Ti.UI.createWindow();
	win.backgroundColor='#ccc';

	// this is where we push the window to the array
	openWindows.push(win);
	
	// create a button to open a new window
	var button = Ti.UI.createButton({
		title:'click Here',
		width:200,
		height:60
	});

	win.add(button);

	// event listener for the button
	button.addEventListener('click', function(){
		
		// funny, we're opening another instance of this window
		// infinite loop? NO, when another row from the masterView
		// is clicker, a loop will close all instances of this window
		detailNav.open(
			otherWin({})
		);

	});
	return win;
};