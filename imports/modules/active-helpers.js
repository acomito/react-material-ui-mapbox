

// This is for the top AppBar, which uses a different color scheme than the top sidebar drawer
export const returnActiveLink = function(currentPath, linkName){
  if (currentPath === linkName) {  return {color: "#B2DFDB"}; }
    return {color: "#FFFFFF"};
};


// This is for the sidebar, which uses a different color scheme than the top AppBar
export const returnActiveSideNav = function(currentPath, linkName){
  if (currentPath === linkName) {  return {color: "#009688"}; }
    return {color: "#424242"};
};