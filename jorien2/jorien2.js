// Jorien Wallast .. common Javascript routines

function updFooterVer()
{
  document.getElementById("footer-ver").innerText = "v20221129.1720." + window.innerWidth + "x" + window.innerHeight;
}

updFooterVer();
window.addEventListener('resize', updFooterVer);
