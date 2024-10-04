// const ctx = document.getElementById('deforestationChart').getContext('2d');

// // Sample data for deforestation (number of trees cut)
// const deforestationData = {
//     labels: [
//         "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
//         "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
//         "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
//         "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
//         "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
//         "Uttar Pradesh", "Uttarakhand", "West Bengal"
//     ],
//     datasets: [{
//         label: 'Number of Trees Cut',
//         data: [
//             25, 10, 65, 45, 20, 
//             15, 70, 50, 30, 40, 
//             55, 5, 80, 35, 10, 
//             60, 20, 30, 50, 15, 
//             40, 70, 25, 45, 55, 
//             35, 60, 20
//         ],
//         backgroundColor: Array(29).fill('rgba(54, 162, 235, 0.6)'), // Default color
//         borderColor: Array(29).fill('rgba(54, 162, 235, 1)'),
//         borderWidth: 1
//     }]
// };

// const deforestationChart = new Chart(ctx, {
//     type: 'bar',
//     data: deforestationData,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Number of Trees Cut'
//                 }
//             },
//             x: {
//                 title: {
//                     display: true,
//                     text: 'States'
//                 }
//             }
//         },
//         onClick: (event) => {
//             const activePoints = deforestationChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
//             if (activePoints.length) {
//                 const { index } = activePoints[0];
//                 highlightState(index);
//                 showCities(deforestationData.labels[index]);
//             }
//         }
//     }
// });

// // Keep track of the previously highlighted index
// let previouslyHighlightedIndex = null;

// // Function to highlight the selected state
// function highlightState(index) {
//     if (previouslyHighlightedIndex !== null) {
//         // Reset the color of the previously highlighted bar
//         deforestationChart.data.datasets[0].backgroundColor[previouslyHighlightedIndex] = 'rgba(54, 162, 235, 0.6)'; // Default color
//     }

//     // Highlight the currently selected bar
//     deforestationChart.data.datasets[0].backgroundColor[index] = 'rgba(255, 99, 132, 0.6)'; // Highlight color
//     previouslyHighlightedIndex = index; // Update the previously highlighted index

//     // Update the chart to reflect the changes
//     deforestationChart.update();
// }

// // Function to show cities in the modal
// function showCities(city) {
//     const cityList = document.getElementById('cityList');
//     cityList.innerHTML = ''; // Clear previous cities

//     const citiesWithDeforestation = {
//         'Andhra Pradesh': ['Suburb A1', 'Suburb A2'],
//         'Arunachal Pradesh': ['Suburb B1'],
//         'Assam': ['Suburb C1', 'Suburb C2', 'Suburb C3'],
//         'Bihar': ['Suburb D1', 'Suburb D2'],
//         'Chhattisgarh': ['Suburb E1', 'Suburb E2', 'Suburb E3']
//         // Add other states as needed
//     };

//     const cityDetails = citiesWithDeforestation[city] || [];
//     cityDetails.forEach(suburb => {
//         const li = document.createElement('li');
//         li.textContent = suburb;
//         cityList.appendChild(li);
//     });

//     const modal = document.getElementById('cityModal');
//     modal.style.display = 'block';

//     // Close modal when clicking on close button
//     document.querySelector('.close-button').onclick = () => {
//         modal.style.display = 'none';
//     };

//     // Close modal when clicking outside of the modal
//     window.onclick = (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     };
// }


// script.js
const ctx = document.getElementById('deforestationChart').getContext('2d');

// Sample data for deforestation (number of trees cut)
const deforestationData = {
    labels: [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ]
    ,
    datasets: [{
        label: 'Number of Trees Cut',
        data: [
            25, 10, 65, 45, 20, 
            15, 70, 50, 30, 40, 
            55, 5, 80, 35, 10, 
            60, 20, 30, 50, 15, 
            40, 70, 25, 45, 55, 
            35, 60, 20
        ], // Number of trees cut in each city
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

const deforestationChart = new Chart(ctx, {
    type: 'bar',
    data: deforestationData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Trees Cut'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Cities'
                }
            }
        },
        onClick: (event) => {
            const activePoints = deforestationChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
            if (activePoints.length) {
                const { index } = activePoints[0];
                showCities(deforestationData.labels[index]);
            }
        }
    }
});

// Function to show cities in the modal
function showCities(city) {
    const cityList = document.getElementById('cityList');
    cityList.innerHTML = ''; // Clear previous cities

    const citiesWithDeforestation = {
        'City A': ['Suburb A1', 'Suburb A2'],
        'City B': ['Suburb B1'],
        'City C': ['Suburb C1', 'Suburb C2', 'Suburb C3'],
        'City D': ['Suburb D1', 'Suburb D2'],
        'City E': ['Suburb E1', 'Suburb E2', 'Suburb E3']
    };

    const cityDetails = citiesWithDeforestation[city] || [];
    cityDetails.forEach(suburb => {
        const li = document.createElement('li');
        li.textContent = suburb;
        cityList.appendChild(li);
    });

    const modal = document.getElementById('cityModal');
    modal.style.display = 'block';

    // Close modal when clicking on close button
    document.querySelector('.close-button').onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of the modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}