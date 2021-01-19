d3.json("samples.json").then(data => {
    var names = data['names']
    console.log(names)

    options = d3.select('#selectTag').selectAll('option')
        .data(names)
        .enter()
        .append('option')
        .text(d => `${d}!!!`)
})