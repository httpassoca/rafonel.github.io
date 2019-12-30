// CHECA A STRING IN A STRING
function HaveString(substr,str){
	if (str.indexOf(substr) >= 0) {
		return true;
	}
	else{return false}
}
// SLICE A STRING FROM ANOTHER STRING
function SliceString(rstring,str){		return str.replace(rstring,'');		}
// REDIRECT TO OTHER PAGE
function Redirect(url){		$(location).attr("href", url);	}
// REDIRECT IN ANOTHER TAB
function RedirectBlank(url){	window.open(url,"_blank");	}
// RELOAD THE PAGE
function Reload(){	location.reload();	}

// UPDATE SECTION SIZE
function SectionSize(x){
	$('section').css('height','calc(100vh - ' + x + 'px )')
}

// ON ICON HOVER
$('i').hover(function() {
	$(this).css('color', $(this).attr('color') + '');
}, function() {
	$(this).css('color', '#fff');
});


// MAKE THE TEAM TABS 
function CloseTabs(){
	$('.project').attr('ativo', 'not');
}
function OpenTab(x){
	$('.project').eq(x).attr('ativo', 'yes');
}

var ind = '';

// LINK BUTTONS IN THE RESPECTIVE TABS
function SetTabs(buttonsdad){
	CloseTabs();
	ind = buttonsdad;
	$(buttonsdad + ':not(.not)').each(function(index, el) {
		$(this).attr('target', index);
		$('.project').each(function(jndex, el) {
			if (jndex == index) {
				$(this).attr('link', index);
			}
		});
	});
	
	// OPEN THE TAB BY BUTTON CLICKED
	$(ind + ':not(.not)').click(function(event) {
		$(this).attr('ativo', 'yes').siblings().attr('ativo', '');
		CloseTabs();
		let tab = $(this).attr('target');
		$('[link=' + tab + ']').attr('ativo', 'yes');
	});

}
