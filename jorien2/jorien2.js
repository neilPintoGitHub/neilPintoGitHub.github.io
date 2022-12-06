// Jorien Wallast .. common Javascript routines

function updFooterVer()
{
  document.getElementById("jw-footer-tooltiptext").innerText = "v20221206.2330." + window.innerWidth + "x" + window.innerHeight;
}

updFooterVer();
window.addEventListener('resize', updFooterVer);
