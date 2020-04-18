var bookmarkurl='http://www.tvshow.com.br'
var bookmarktitle=document.title

function addbookmark(){
if (document.all)
window.external.AddFavorite(bookmarkurl,bookmarktitle)
}
