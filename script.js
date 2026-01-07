// 1. DATA CONFIGURATION
const CURRENT_TOPIC = "Culture";
const DOMAIN_URL = "https://stories.polynesianpride.co/";

// Database Bài Viết
const blogPosts = [
    // --- POLYNESIA ---
    {
        id: 1,
        title: "Điệu nhảy Hula: Linh hồn của Hawaii",
        region: "Polynesia",
        country: "Hawaii",
        tags: ["Culture", "Dance"],
        img: "https://images.unsplash.com/photo-1542259659-4ab2877c2401?q=80&w=600&auto=format&fit=crop",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Lễ hội xăm mình Tattoo tại Samoa",
        region: "Polynesia",
        country: "Samoa",
        tags: ["Culture", "Art"],
        img: "https://images.unsplash.com/photo-1596323086961-419b6e87a270?q=80&w=600&auto=format&fit=crop",
        date: "2024-02-10"
    },
    {
        id: 3,
        title: "Haka: Tiếng gầm của chiến binh Maori",
        region: "Polynesia",
        country: "New Zealand",
        tags: ["Culture", "History"],
        img: "https://images.unsplash.com/photo-1469521669194-babb45f835ae?q=80&w=600&auto=format&fit=crop",
        date: "2024-03-05"
    },
    {
        id: 4,
        title: "Bí mật đằng sau hoa Lei",
        region: "Polynesia",
        country: "Hawaii",
        tags: ["Culture", "Nature"],
        img: "https://images.unsplash.com/photo-1589394666421-26c715974419?q=80&w=600&auto=format&fit=crop",
        date: "2024-03-12"
    },
    {
        id: 5,
        title: "Ẩm thực Tahiti: Cá sống Poisson Cru",
        region: "Polynesia",
        country: "Tahiti",
        tags: ["Culture", "Food"],
        img: "https://images.unsplash.com/photo-1532966527582-730ce972627e?q=80&w=600&auto=format&fit=crop",
        date: "2023-12-20"
    },
    // --- MELANESIA ---
    {
        id: 6,
        title: "Nghi lễ Kava tại Fiji",
        region: "Melanesia",
        country: "Fiji",
        tags: ["Culture", "Drink"],
        img: "https://images.unsplash.com/photo-1598327105654-706f9d453667?q=80&w=600&auto=format&fit=crop",
        date: "2024-02-01"
    },
    {
        id: 7,
        title: "Bộ lạc vùng cao nguyên Papua",
        region: "Melanesia",
        country: "Papua New Guinea",
        tags: ["Culture", "People"],
        img: "https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=600&auto=format&fit=crop",
        date: "2024-01-20"
    },
    {
        id: 8,
        title: "Lặn biển xác tàu Vanuatu",
        region: "Melanesia",
        country: "Vanuatu",
        tags: ["Culture", "History"],
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
        date: "2023-11-15"
    },
    // --- MICRONESIA ---
    {
        id: 10,
        title: "Đá tiền Yap: Đơn vị tiền tệ khổng lồ",
        region: "Micronesia",
        country: "Yap",
        tags: ["Culture", "History"],
        img: "https://images.unsplash.com/photo-1596522518420-56247c7d424b?q=80&w=600&auto=format&fit=crop",
        date: "2024-01-05"
    },
    {
        id: 11,
        title: "Truyền thuyết hồ sứa Palau",
        region: "Micronesia",
        country: "Palau",
        tags: ["Culture", "Nature"],
        img: "https://images.unsplash.com/photo-1551068832-720485662705?q=80&w=600&auto=format&fit=crop",
        date: "2024-02-28"
    },
    {
        id: 12,
        title: "Chiến tranh Thái Bình Dương tại Guam",
        region: "Micronesia",
        country: "Guam",
        tags: ["Culture", "History"],
        img: "https://images.unsplash.com/photo-1518081461904-7d8fbed95449?q=80&w=600&auto=format&fit=crop",
        date: "2023-09-15"
    }
];

// Database Mô tả động (Metafield descriptions từ blog)
const topicDescriptions = {
    // Region Descriptions
    "Polynesia": "Khám phá tam giác Polynesia huyền bí với Hawaii, New Zealand và Samoa. Nơi khởi nguồn của văn hóa lướt sóng và xăm mình.",
    "Melanesia": "Vùng đất của những hòn đảo đen, đa dạng ngôn ngữ nhất thế giới. Trải nghiệm văn hóa thổ dân nguyên sơ tại Fiji và Papua New Guinea.",
    "Micronesia": "Hàng ngàn đảo nhỏ rải rác như ngọc. Tìm hiểu lịch sử Thế chiến II và văn hóa hàng hải của người dân đảo san hô.",

    // Country Specific Descriptions (Blog metafields)
    "Hawaii": "Aloha! Đắm mình trong điệu Hula và truyền thuyết các vị thần lửa Pele.",
    "New Zealand": "Kia Ora! Khám phá văn hóa Maori hào hùng qua điệu Haka và nghệ thuật chạm khắc gỗ.",
    "Samoa": "Talofa! Trải nghiệm lối sống Fa'a Samoa gìn giữ suốt 3000 năm.",
    "Tahiti": "Viên ngọc xanh của Pháp. Sự pha trộn tinh tế giữa văn hóa Polynesia và lãng mạn châu Âu.",
    "Fiji": "Bula! Thưởng thức Kava và lòng hiếu khách nồng hậu nhất thế giới.",
    "Vanuatu": "Vùng đất của núi lửa và những bộ lạc cổ xưa chưa bị thời gian chạm tới.",
    "Papua New Guinea": "Hơn 800 ngôn ngữ và những lễ hội Sing-sing đầy màu sắc bí ẩn.",
    "Palau": "Thiên đường lặn biển và bảo tồn văn hóa mẫu hệ độc đáo.",
    "Guam": "Nơi giao thoa văn hóa Chamorro bản địa và ảnh hưởng hiện đại của Mỹ.",
    "Yap": "Hòn đảo của những đồng tiền đá khổng lồ và văn hóa truyền thống được bảo tồn nguyên vẹn."
};

// 2. HELPER FUNCTIONS
function toSlug(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

// 3. CORE LOGIC
function updateUI(region, country) {
    // A. Update Title (h3)
    const titleElement = document.getElementById(`title-${region.toLowerCase()}`);
    const descElement = document.getElementById(`desc-${region.toLowerCase()}`);
    const linkElement = document.getElementById(`link-${region.toLowerCase()}`);

    // Fade effect
    descElement.classList.add('fading');

    setTimeout(() => {
        // Update title based on selection
        if (country === 'all') {
            titleElement.textContent = `${region} Blogs`;
        } else {
            titleElement.textContent = `${country} Blogs`;
        }

        // Update description
        const descKey = country === 'all' ? region : country;
        const text = topicDescriptions[descKey] || topicDescriptions[region];
        descElement.textContent = text;
        descElement.classList.remove('fading');
    }, 200);

    // B. Update CTA Link
    const topicSlug = toSlug(CURRENT_TOPIC);
    let finalUrl = "#";
    let linkText = "Xem tất cả bài viết";

    if (country === 'all') {
        finalUrl = `${DOMAIN_URL}blogs/${toSlug(region)}/tagged/${topicSlug}`;
        linkText = `Xem tất cả ${region}`;
    } else {
        finalUrl = `${DOMAIN_URL}blogs/${toSlug(country)}/tagged/${topicSlug}`;
        linkText = `Xem tất cả ${country}`;
    }

    linkElement.href = finalUrl;
    linkElement.innerHTML = `${linkText} →`;

    // C. Update Active Button State
    const sectionElement = document.getElementById(region.toLowerCase());
    const buttons = sectionElement.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent;
        if ((country === 'all' && btnText === 'Tất cả') || btnText === country) {
            btn.classList.add('active');
        }
    });

    // D. Render Posts
    renderPosts(region, country);
}

function renderPosts(region, countryFilter) {
    const gridContainer = document.getElementById(`grid-${region.toLowerCase()}`);
    if (!gridContainer) return;

    // Filter posts by region and topic
    let filteredPosts = blogPosts.filter(post => 
        post.region === region && post.tags.includes(CURRENT_TOPIC)
    );

    // Further filter by country if not "all"
    if (countryFilter !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.country === countryFilter);
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render
    gridContainer.innerHTML = '';

    if (filteredPosts.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">Không có bài viết nào trong danh mục này.</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const postUrl = `${DOMAIN_URL}blogs/${toSlug(post.country)}/${toSlug(post.title)}`;
        const card = `
            <article class="post-card">
                <div class="card-img">
                    <img src="${post.img}" alt="${post.title}" loading="lazy">
                </div>
                <div class="card-body">
                    <div class="card-meta">${post.country}</div>
                    <h3 class="card-title">
                        <a href="${postUrl}">${post.title}</a>
                    </h3>
                    <div class="card-date">${formatDate(post.date)}</div>
                </div>
            </article>
        `;
        gridContainer.innerHTML += card;
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('vi-VN', options);
}

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Load initial data for all regions
    updateUI('Polynesia', 'all');
    updateUI('Melanesia', 'all');
    updateUI('Micronesia', 'all');

    // Smooth scroll for hero CTA
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.page-header').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});
