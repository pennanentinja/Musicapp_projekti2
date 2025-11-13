# 🎧 Musiikkivirta – Music Info App

Tekijä: Tinja Pennanen

## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa [Netlify-linkki tähän]  
Linkki projektin videoesittelyyn [[Laurean videopalvelussa](https://video.laurea.fi/media/Musicapp+projekti2/0_bmg0b1ep)]

## Työn jakautuminen
Tein projektin itsenäisesti. Joten hoidin projektissa jokaisen osa-alueen itse. Näitä olivat suunnittelu, toteutus sekä testaus.

## Oma arvio työstä ja oman osaamisen kehittymisestä
Mielestäni onnistuin ihan hyvin rakentamaan toimivan sekä visuaalisesti hyvin selkeän sovelluksen. Projektissa onnistuin hyödyntämään AJAX-kutsuja sekä käyttämään Last.fm:n live-API:a. Tietenkin parantamisen varaa olisi aina, kuitenkin tässä projektissa ehkä eniten virheenkäsittelyssä. Sovelluksesta jäi uupumaan joitakin asioita, jotka olisi voineet siellä olla. Näitä oli esimerkiksi lisätiedot artisteista sekä suosikkien tallennus.
Koen kuitenkin oppineeni API:n rakenteen ja tapahtumakäsittelijöiden käytön kiitettävästi.
Antaisin itselleni pisteitä seuraavasti: 8/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kurssi sekä lähiopetuksessa olleet workshopit ovat olleet todella hyödylisiä ja selkeitä. Opetusta on helppo seurata ja tehtäviä on mukava tehdä vaikka välillä tuntuvatkin menevän yli hilseen. Arvostan sitä, että opettaja on aina valmis auttamaan ja kyselee miten tehtävät sekä projektit sujuvat.

## Sisällysluettelo:

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#tunnetut-virheetbugit)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta
Musiikkivirta on sovellus, joka toimii selaimessa. Se hakee Last.fm:n API:n kautta tämän hetken suosituimmat artistit, sekä hakukentällä voi hakea myös muita artisteja. Käyttäjä voi klikata artisteja listalta, jonka kautta pystyy näkemään artistin albumit. Albumia klikkaamalla käyttäjä näkee myös kyseisen albumin sisältämät kappaleet. Sovellus käyttää AJAX-kutsuja, tapahtumakäsittelijöitä ja on toteutettu JavaScriptillä ilman kirjastoja.

## Tunnetut virheet/bugit
- Jos artistin tai albumin nimi sisältää erikoismerkkejä, API ei aina palauta tietoja oikein  
- Kappalelista ei sulkeudu automaattisesti, jos klikataan toista albumia  
- Hakutoimintoa käyttäessä, esimerkiksi hakemalla "jsnpkdvnsvsp", se ei palauta esimerkiksi tekstiä "kyseistä artistia ei löytynyt" vaan saattaa näyttää artisteja, joiden albumeiden nimet ovat lähimpänä kyseistä sössöä.

## Kuvakaappaukset
![Kuvakaappaus sovelluksesta](kuvat/Musicapp.png) 
Kuva: [Tinja Pennanen]

## Teknologiat
Käytin seuraavia teknologioita:  
- `HTML` – rakenteen luomiseen  
- `CSS` – Ulkoasun luomiseen  
- `JavaScript` – AJAX-kutsuihin, DOM-manipulaatioon ja tapahtumakäsittelijöihin  
- `Last.fm API` – artisti-, albumi- ja kappaletietojen hakemiseen  
- `GitHub` – versionhallintaan  
- `Netlify` – sovelluksen julkaisuun

## Asennus
- Lataa tai kloonaa repositorio GitHubista  
- Avaa `index.html` selaimessa  
- Varmista, että internet-yhteys on päällä, jotta API toimii  
- Sovellus ei vaadi palvelinta tai kirjautumista

## Lähestymistapa
Aloitin projektin miettimällä, miltä sivun pitäisi näyttää ja miten eri osat toimisivat. Rakensin toiminnallisuudet vaihe kerrallaan: ensin artistilista, sitten albumit ja lopuksi kappaleet. Halusin ulkoasusta selkeän ja modernin, joten tyylittelin sen sinertävillä sävyillä. Testasin sovellusta eri selaimilla ja kommentoin koodin selkeästi, jotta siitä saa helposti selvää. Yritin pitää rakenteen siistinä ja jaoin toiminnallisuudet loogisesti omiin osiin.

## Lähteet
- [Last.fm API](https://www.last.fm/api)  
- [Public APIs - GitHub](https://github.com/public-apis/public-apis)  
- Microsoft Copilot auttoi minua koodin jäsentelyssä, virheiden korjaamisessa ja README.md:n rakenteessa 
- Sekä tietenkin opettajan antamat kurssimateriaalit

## Lisenssi
MIT-lisenssi © Tinja  
Lisenssi löytyy GitHub-repositoriosta
