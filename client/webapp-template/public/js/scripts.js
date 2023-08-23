/**
 * webapp-template - Your webapp
 * © 2023 Brian Gormanly
 *
 */

/*
 * Menu management for webapp-template 
 */

window.addEventListener( "load", () => {
    
} );


let sideBarStatus = true;
function toggleSidebar() {
    if ( !sideBarStatus ) {
        document.getElementById( "webapp-templateSideBar" ).style.width = "250px";
        document.body.style.marginLeft = "250px";
    }
    else {
        document.getElementById( "webapp-templateSideBar" ).style.width = "85px";
        if( window.innerWidth > 992 ) {
            document.body.style.marginLeft = "85px";
        }
    }
    sideBarStatus = !sideBarStatus;
}

// add events for toggle sidebar
if( document.getElementById( "webapp-templateSideBar" ) ) {
    toggleSidebar();
    document.getElementById( "webapp-templateSideBar" ).addEventListener( "mouseover", toggleSidebar );
    document.getElementById( "webapp-templateSideBar" ).addEventListener( "mouseout", toggleSidebar );
}


