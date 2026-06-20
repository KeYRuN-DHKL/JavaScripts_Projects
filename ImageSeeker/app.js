const API_KEY = "YJiyRDUhigykDehfhW4u_hmF_6Tvny9_4NGgO6CvIzA"; 
const API_URL = "https://api.unsplash.com/search/photos";
const PER_PAGE = 12;

const searchInput  = document.querySelector("#searchInput");
const searchBtn    = document.querySelector("#searchBtn");
const imageGrid    = document.querySelector("#imageGrid");
const spinner      = document.querySelector("#spinner");
const loadMoreBtn  = document.querySelector("#loadMoreBtn");
const emptyState   = document.querySelector("#emptyState");
const errorMsg     = document.querySelector("#errorMsg");
const errorText    = document.querySelector("#errorText");
const noResults    = document.querySelector("#noResults");
const resultsInfo  = document.querySelector("#resultsInfo");
const searchTerm   = document.querySelector("#searchTerm");
const totalResults = document.querySelector("#totalResults");

let currentQuery  = "";
let currentPage   = 1;
let totalPages    = 0;

function showSpinner()    { spinner.classList.remove("hidden");    }
function hideSpinner()    { spinner.classList.add("hidden");       }
function showLoadMore()   { loadMoreBtn.classList.remove("hidden"); }
function hideLoadMore()   { loadMoreBtn.classList.add("hidden");   }

function showEmptyState() {
    emptyState.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    noResults.classList.add("hidden");
    resultsInfo.classList.add("hidden");
}

function showError(message) {
    errorMsg.classList.remove("hidden");
    errorText.textContent = message;
    emptyState.classList.add("hidden");
    noResults.classList.add("hidden");
    resultsInfo.classList.add("hidden");
    hideLoadMore();
}

function showNoResults() {
    noResults.classList.remove("hidden");
    emptyState.classList.add("hidden");
    errorMsg.classList.add("hidden");
    resultsInfo.classList.add("hidden");
    hideLoadMore();
}

function showResultsInfo(query, total) {
    resultsInfo.classList.remove("hidden");
    emptyState.classList.add("hidden");
    errorMsg.classList.add("hidden");
    noResults.classList.add("hidden");
    searchTerm.textContent   = `"${query}"`;
    totalResults.textContent = `(${total.toLocaleString()} results)`;
}

function renderImages(images) {
    images.forEach(image => {

        //card
        const card = document.createElement("div");
        card.classList.add(
            "relative", "group", "overflow-hidden",
            "rounded-xl", "shadow-md", "cursor-pointer",
            "hover:shadow-xl", "transition", "duration-300",
            "hover:-translate-y-1"
        );

        // image
        const img = document.createElement("img");
        img.src   = image.urls.small;
        img.alt   = image.alt_description || "Unsplash Image";
        img.classList.add("w-full", "h-56", "object-cover");

        // overlay
        const overlay = document.createElement("div");
        overlay.classList.add(
            "absolute", "inset-0", "bg-black", "opacity-0",
            "group-hover:opacity-40", "transition", "duration-300"
        );

        // info bar
        const info = document.createElement("div");
        info.classList.add(
            "absolute", "bottom-0", "left-0", "right-0",
            "p-3", "bg-gradient-to-t", "from-black/70", "to-transparent",
            "translate-y-full", "group-hover:translate-y-0",
            "transition", "duration-300"
        );
        info.innerHTML = `
            <p class="text-white text-sm font-semibold truncate">
                📷 ${image.user.name}
            </p>
            <p class="text-gray-300 text-xs">
                ❤️ ${image.likes.toLocaleString()} likes
            </p>
        `;

        // click → open full image
        card.addEventListener("click", () => {
            window.open(image.urls.full, "_blank");
        });

        // assemble card
        card.appendChild(img);
        card.appendChild(overlay);
        card.appendChild(info);
        imageGrid.appendChild(card);
    });
}

async function fetchImages(query, page) {
    const url = `${API_URL}?query=${encodeURIComponent(query)}&page=${page}&per_page=${PER_PAGE}&client_id=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
}

async function handleSearch() {
    const query = searchInput.value.trim();

    // ignore empty search
    if (query === "") {
        searchInput.focus();
        searchInput.classList.add("ring-2", "ring-red-400");
        setTimeout(() => {
            searchInput.classList.remove("ring-2", "ring-red-400");
        }, 1500);
        return;
    }

    currentQuery = query;
    currentPage  = 1;
    imageGrid.innerHTML = "";
    hideLoadMore();

    showSpinner();

    try {
        const data = await fetchImages(currentQuery, currentPage);

        hideSpinner();

        if (data.results.length === 0) {
            showNoResults();
            return;
        }

        totalPages = data.total_pages;
        showResultsInfo(query, data.total);
        renderImages(data.results);

        if (currentPage < totalPages) {
            showLoadMore();
        }

    } catch (error) {
        hideSpinner();
        showError(error.message);
    }
}

async function handleLoadMore() {
    currentPage++;

    // show spinner below existing images
    showSpinner();
    hideLoadMore();

    try {
        const data = await fetchImages(currentQuery, currentPage);

        hideSpinner();
        renderImages(data.results);

        if (currentPage < totalPages) {
            showLoadMore();
        }

    } catch (error) {
        hideSpinner();
        showError(error.message);
    }
}


searchBtn.addEventListener("click", handleSearch);


searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
});

loadMoreBtn.addEventListener("click", handleLoadMore);

showEmptyState();