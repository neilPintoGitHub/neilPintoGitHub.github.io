// Jorien Wallast .. common Javascript routines

function updFooterVer()
{
  document.getElementById("jw-footer-tooltiptext").innerText = "v20221209.1715." + window.innerWidth + "x" + window.innerHeight;
}

updFooterVer();
window.addEventListener('resize', updFooterVer);
