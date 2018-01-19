function top() {
    document.getElementById( 'top' ).scrollIntoView();  
    this.onclick();
};

function bottom() {
    document.getElementById( 'bottom' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};
