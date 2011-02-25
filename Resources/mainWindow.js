var mainWin = function(params){
	// just a window
	var win = Ti.UI.createWindow();
	
	var label = Ti.UI.createLabel({
		text:' This is the fist Window',
		backgroundColor:'white',
		width:200,
		height:50
	});
	win.add(label);
	return win;
};