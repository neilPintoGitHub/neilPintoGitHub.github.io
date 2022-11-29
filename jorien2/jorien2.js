// Jorien Wallast .. common Javascript routines

function updFooterVer()
{
  document.getElementById("footer-ver").innerText = "v20221129.1740." + window.innerWidth + "x" + window.innerHeight;
}

updFooterVer();
window.addEventListener('resize', updFooterVer);
