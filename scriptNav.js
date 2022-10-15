/* NAVIOS  */
const btnImo = document.getElementById('btnImo')
   
btnImo.addEventListener('click', function() {
    imoBusc(document.getElementById('imo').value);
})

function imoBusc(imo) {
fetch('file:///C:/Users/dj_sa/Documents/GitHub/SitePortfolio/test.json')
    .then(response => {
        return response.json()
      })
    .then(res => {
        console.log(res)
        let p1 = document.createElement('p')
        let bandeira = document.createTextNode(`Bandeira: ${res[0].Flag}`)
        p1.appendChild(bandeira)
        document.getElementById('result').appendChild(p1)
    })
    .catch(error => {
      document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Refaça sua pesquisa."))
    })
    }