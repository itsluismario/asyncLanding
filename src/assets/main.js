const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLGffrC-JgwEnVs40c5YP-A5xEuahRiKrG&part=snippet&maxResults=50';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5b57e3785msha742d44d0708d76p158fa2jsnf8940cefda5b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// Async Fun.
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data; 
}

// This fn can be called automatically 
(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,10).join('')}
        `;
        content.innerHTML = view;
    } catch(error) {
        console.log(error);
    }
})();