// Sets a local storage area with a name.
var localStorageKey = "demoStorageKey";

$('#note-taking-page').ready(function() {
    /*
	*  Removes all values from the assigned local storage
	*/
	$('#deleteStorage').click(function(e) {
		localStorage.removeItem(localStorageKey);
		showStoreValue();
		navigator.vibrate(1000);
		e.preventDefault();
    });
	
	/*
	* Adds current value in the input field to local storage
	*/
	$('#addToStorage').click(function(e) {
		localStorage.setItem(localStorageKey, $('#entry').val());
		showStoreValue();
		e.preventDefault();
	});
});

/*
* Displays all values within local storage. 
*/
function showStoreValue() {
	var item = localStorage.getItem(localStorageKey);
	
	if (item == null) {
		item = 'Nothing in store';
	} else if (item.length === 0) {
		item = 'Store contains empty value'; 
	}
	
	$('.storeItem').text(item);
}