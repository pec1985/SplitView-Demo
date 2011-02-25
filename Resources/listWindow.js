var listWin = function(params){
	var win = Ti.UI.createWindow();
	
	// nothing fancy, create rows for the table view
	var tableData = [];
	for (var i = 0;i<200;i++){
		tableData[i] = {title:'Row #'+(i+1),rowId:i};
	}
	// create the table view
	var table = Ti.UI.createTableView({data:tableData});

	win.add(table);

	//=====This is it=======
	// the table event listener
	table.addEventListener('click', function(){
		// output on the console the number of windows stored on the array
		Ti.API.info(openWindows);
		
		// create a loop and close ALL opened windows
		// (array populated on otherWindow.js)
		for(var i = 0;i<openWindows.length;i++){
			detailNav.close(openWindows[i],{animated:false});
		}
		// important, reset the array back to nothing
		openWindows.length = 0;
		
		// open the next window after closing the other ones
		detailNav.open(
			otherWin({})/*,{animted:false}*/
		);
	});
	return win;
};