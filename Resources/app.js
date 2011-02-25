// This app demonstrates that it is possible to create a splitView app
// in which all the windows from the detalNav section will close when a
// row from the masterNav's tableView is clicked
// Coder: @pecdev
// Brains: @pec1985
// Follow me and my clone on Twitter


// include all the window. Why you ask?
// because the windows are wrapped in functions
// for better performace, memory management
// and clarity
Ti.include('mainWindow.js');
Ti.include('listWindow.js');
Ti.include('otherWindow.js');

// Anything declared in this file will be global
// very important to know that

// open windows array (global var)
var openWindows = [];

// create the two navigation groups (gloval vars)
var masterNav = Ti.UI.iPhone.createNavigationGroup({});
var detailNav = Ti.UI.iPhone.createNavigationGroup({});

// assign the windows to the navigation groups
masterNav.window=listWin({});
detailNav.window=mainWin({});

// add both navigation groups to the split view (splitView is also global)
var splitView = Titanium.UI.iPad.createSplitWindow({
	masterView:masterNav,
	detailView:detailNav
});

// standard split view buttons, nothing fancy
splitView.addEventListener('visible', function(e) {
    if (e.view == 'detail') {
        e.button.title = "List";
		// since we never declared the window as a variable
		// we need to specify with detailNav.window.....
        detailNav.window.leftNavButton = e.button;          
    }else if (e.view  == 'master') {
		detailNav.window.leftNavButton = null;
    }
});

// open the plitview
splitView.open();
