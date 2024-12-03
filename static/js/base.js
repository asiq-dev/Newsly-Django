// document.addEventListener('DOMContentLoaded', function() {
//     // This is where you would typically fetch your news data from your Django backend
//     // For this example, we'll use dummy data
//     const newsArticles = [
//         {
//             title: "Breaking News: Important Event Occurs",
//             image: "https://via.placeholder.com/300x200.png?text=News+Image",
//             summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             date: "June 1, 2023"
//         },
//         {
//             title: "Technology Advances: New Gadget Unveiled",
//             image: "https://via.placeholder.com/300x200.png?text=Tech+News",
//             summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//             date: "May 30, 2023"
//         },
//         {
//             title: "Sports Update: Team Wins Championship",
//             image: "https://via.placeholder.com/300x200.png?text=Sports+News",
//             summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//             date: "May 28, 2023"
//         },
//         {
//             title: "Entertainment: Celebrity Announces New Project",
//             image: "https://via.placeholder.com/300x200.png?text=Entertainment+News",
//             summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             date: "May 26, 2023"
//         }
//     ];

//     const newsContainer = document.getElementById('news-container');

//     newsArticles.forEach(article => {
//         const articleElement = document.createElement('div');
//         articleElement.className = 'col-md-6 mb-4';
//         articleElement.innerHTML = `
//             <div class="card news-card h-100">
//                 <img src="${article.image}" class="card-img-top" alt="${article.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${article.title}</h5>
//                     <p class="card-text">${article.summary}</p>
//                     <p class="card-text"><small class="text-muted">${article.date}</small></p>
//                 </div>
//             </div>
//         `;
//         newsContainer.appendChild(articleElement);
//     });
// });

