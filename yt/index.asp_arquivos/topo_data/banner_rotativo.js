function Banners()
{
    var MNews = new Array(); 
	MNews[0]= '<A HREF="http://www.tvshow.com.br/v2/assinar/assinar.asp" TARGET="conteudo"><IMG SRC="http://www.tvshow.com.br/v2/campanha_mes/CP_Outubro_07.gif" WIDTH=468 HEIGHT=60 BORDER=0></a>'
    MNews[1]= '<A HREF="http://www.tvshow.com.br/v2/promocoes/pg_promocoes.asp?Cod_Promo=9" onclick="NewWindow(this.href,janela,300,353,no,resizable=yes);return false;"><IMG SRC="http://www.tvshow.com.br/v2/promocoes/img_promocoes/top_model/banner_top_model.gif"  WIDTH=468 HEIGHT=60 BORDER=0></a>'
      
   var Numero = Math.floor(Math.random()*2);
   document.write(MNews[Numero]);
}