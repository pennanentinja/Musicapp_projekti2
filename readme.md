# 🎧 Musiikkivirta – Music Info App

Tekijä: Tinja  
Parityö: [Lisää parin nimi tähän, jos tehty yhdessä]

## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa [Netlify-linkki tähän]  
Linkki projektin videoesittelyyn [YouTube-linkki tähän]

## Työn jakautuminen
Tein projektin itsenäisesti / parityönä.  
[Jos parityö:] Sovimme työnjaosta ajoissa ja kommunikoimme sujuvasti. Minä vastasin mm. käyttöliittymän rakenteesta, API-kutsujen toteutuksesta ja tyylien viimeistelystä. Parini keskittyi hakutoimintoon, README.md:n rakenteeseen ja testaukseen.  
Käytimme yhteistä GitHub-repoa ja jaoimme tehtävät selkeästi. Molemmat osallistuivat suunnitteluun ja virheiden korjaamiseen.

## Oma arvio työstä ja oman osaamisen kehittymisestä
Mielestäni onnistuin rakentamaan toimivan ja visuaalisesti selkeän sovelluksen, joka hyödyntää AJAX-kutsuja ja Last.fm:n live-API:a.  
Parantamista olisi responsiivisuudessa ja virheenkäsittelyssä.  
Sovelluksesta jäi puuttumaan artistin lisätiedot ja mahdollisuus tallentaa suosikkeja.  
Koen, että olen oppinut API:n rakenteen, dynaamisten tapahtumakäsittelijöiden käytön ja CSS-layoutin hallintaa.  
Epäselväksi jäi Last.fm:n autentikointi ja POST-kutsujen käyttö.  
Antaisin itselleni pisteitä seuraavasti: 8/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kurssi sekä lähiopetus ovat tuntuneet hyödyllisiltä ja käytännönläheisiltä.  
Oppimistani tukisi, jos tehtävissä olisi enemmän esimerkkejä ja mahdollisuus saada palautetta jo ennen lopullista palautusta.  
Arvostan selkeitä vaatimuksia ja konkreettisia arviointikriteerejä.

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
Musiikkivirta on selainpohjainen sovellus, joka hakee Last.fm:n API:n kautta tämän hetken suosituimmat artistit.  
Käyttäjä voi klikata artistia ja nähdä hänen albuminsa, ja klikata albumia nähdäkseen kappaleet.  
Sovellus käyttää AJAX-kutsuja, dynaamisia tapahtumakäsittelijöitä ja on toteutettu natiivilla JavaScriptillä ilman kirjastoja.

## Tunnetut virheet/bugit
- Jos artistin tai albumin nimi sisältää erikoismerkkejä, API ei aina palauta tietoja oikein  
- Kappalelista ei sulkeudu automaattisesti, jos klikataan toista albumia  
- Hakutoiminto ei tue autocompletea

## Kuvakaappaukset
`![Kuvakaappaus sovelluksesta](https://unsplash.com/photos/VBPzRgd7gfc)`  
Kuva: [Kelly Sikkema](https://unsplash.com/@kellysikkema)

## Teknologiat
Käytin seuraavia teknologioita:  
- `HTML` – rakenteen luomiseen  
- `CSS` – Spotify-henkiseen ulkoasuun sinertävillä sävyillä  
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
Aloitin suunnittelemalla käyttöliittymän rakenteen ja testasin API:n vastauksia erikseen.  
Rakensin toiminnallisuudet vaiheittain: artistilista → albumit → kappaleet.  
Tyylittelin sivun Spotify-henkiseksi ja testasin eri selaimilla.  
Kommentoin koodin selkeästi ja pidin rakenteen modulaarisena.

## Kiitokset
- [Last.fm API](https://www.last.fm/api)  
- [Public APIs - GitHub](https://github.com/public-apis/public-apis)  
- ChatGPT auttoi minua koodin jäsentelyssä, virheiden korjaamisessa ja README.md:n rakenteessa  
- [Unsplash](https://unsplash.com) – kuvakaappauskuva

## Lisenssi
MIT-lisenssi © Tinja  
Lisenssi löytyy GitHub-repositoriosta
