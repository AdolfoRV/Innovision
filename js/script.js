document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const subsidyType = document.getElementById('subsidyType').value;

    // Simulate search results (In a real application, this would be an API call)
    const results = [
        { location: 'Ñuñoa', subsidy: 'DS49', description: '1 habitación, 67 m², 813 UF' },
        { location: 'Maipú', subsidy: 'DS49', description: '1 habitación, 51 m², 807 UF' },
        { location: 'Puente Alto', subsidy: 'DS19', description: '1 habitación, 61 m², 964 UF' }
    ];

    const filteredResults = results.filter(result =>
        result.location.toLowerCase().includes(location.toLowerCase()) &&
        result.subsidy === subsidyType
    );

    displayResults(filteredResults);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.innerHTML = `
                <h3>${result.location} - ${result.subsidy}</h3>
                <p>${result.description}</p>
            `;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda.</p>';
    }
}

document.getElementById('requestAdvice').addEventListener('click', function() {
    const adviceResult = document.getElementById('adviceResult');
    adviceResult.innerHTML = '<p>Nuestro asesor se pondrá en contacto contigo pronto para ayudarte a encontrar la mejor opción de vivienda para tu subsidio.</p>';
});
