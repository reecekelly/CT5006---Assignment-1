var localStorageKey = "demoStorageKey";

$('#note-taking-page').ready(function() {
    
	$('#deleteStorage').click(function(e) {
		localStorage.removeItem(localStorageKey);
		showStoreValue();
		navigator.vibrate(1000);
		e.preventDefault();
    });
	
	$('#addToStorage').click(function(e) {
		localStorage.setItem(localStorageKey, $('#entry').val());
		showStoreValue();
		e.preventDefault();
	});
});

function showStoreValue() {
	var item = localStorage.getItem(localStorageKey);
	
	if (item == null) {
		item = 'Nothing in store';
	} else if (item.length === 0) {
		item = 'Store contains empty value'; 
	}
	
	$('.storeItem').text(item);
}