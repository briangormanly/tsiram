/**
 * tsiram - Your webapp
 * © 2023 Brian Gormanly
 *
 */

/*
 * Menu management for tsiram 
 */

window.addEventListener( "load", () => {
    
} );


let sideBarStatus = true;
function toggleSidebar() {
    if ( !sideBarStatus ) {
        document.getElementById( "tsiramSideBar" ).style.width = "250px";
        document.body.style.marginLeft = "250px";
    }
    else {
        document.getElementById( "tsiramSideBar" ).style.width = "85px";
        if( window.innerWidth > 992 ) {
            document.body.style.marginLeft = "85px";
        }
    }
    sideBarStatus = !sideBarStatus;
}

// add events for toggle sidebar
if( document.getElementById( "tsiramSideBar" ) ) {
    toggleSidebar();
    document.getElementById( "tsiramSideBar" ).addEventListener( "mouseover", toggleSidebar );
    document.getElementById( "tsiramSideBar" ).addEventListener( "mouseout", toggleSidebar );
}


