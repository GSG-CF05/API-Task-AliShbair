let tbody = document.querySelector("tbody");

fetch("https://api.covid19api.com/summary")
.then((res) => {
  return res.json();
}).then(source => {

  for (let i=0; i<source.Countries.length; i++){

    let tr = document.createElement('tr')
    
    let tdCount = document.createElement('td')
    tdCount.textContent = i+1

    let tdC = document.createElement('td')
    tdC.textContent = source.Countries[i].Country

    let tdTC = document.createElement('td')
    tdTC.textContent = source.Countries[i].TotalConfirmed

    let tdNC = document.createElement('td')
    tdNC.textContent = source.Countries[i].NewConfirmed

    let tdTD = document.createElement('td')
    tdTD.textContent = source.Countries[i].TotalDeaths

    let tdND = document.createElement('td')
    tdND.textContent = source.Countries[i].NewDeaths

    let tdTR = document.createElement('td')
    tdTR.textContent = source.Countries[i].TotalRecovered

    let tdDate = document.createElement('td')
    tdDate.textContent = source.Countries[i].Date
        
    tbody.appendChild(tr)
    tr.appendChild(tdCount)
    tr.appendChild(tdC)
    tr.appendChild(tdTC)
    tr.appendChild(tdNC)
    tr.appendChild(tdTD)
    tr.appendChild(tdND)
    tr.appendChild(tdTR)
    tr.appendChild(tdDate)
  }
}).catch(Error);