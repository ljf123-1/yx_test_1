/**
 * 主要的JavaScript文件
 * 处理全局功能和交互
 */

// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次
    
    // 绑定播放按钮事件
    bindPlayButtonEvents();
    
    // 处理导航点击事件
    handleNavigation();
});

/**
 * 更新状态栏时间
 */
function updateStatusBarTime() {
    const statusBarTime = document.querySelector('.status-bar-left');
    if (statusBarTime) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        statusBarTime.textContent = `${hours}:${minutes}`;
    }
}

/**
 * 绑定播放按钮事件
 */
function bindPlayButtonEvents() {
    // 播放/暂停按钮
    const playButtons = document.querySelectorAll('.player-control-btn.play-pause, .mini-player-btn.fa-play, .mini-player-btn.fa-pause');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 阻止事件冒泡，防止迷你播放器点击事件触发
            e.stopPropagation();
            
            // 切换播放/暂停图标
            if (this.classList.contains('fa-play')) {
                this.classList.remove('fa-play');
                this.classList.add('fa-pause');
            } else if (this.classList.contains('fa-pause')) {
                this.classList.remove('fa-pause');
                this.classList.add('fa-play');
            }
            
            // 这里可以添加实际的音频播放/暂停功能
            console.log('播放/暂停切换');
        });
    });
    
    // 其他播放器控制按钮
    const controlButtons = document.querySelectorAll('.player-control-btn:not(.play-pause), .mini-player-btn.fa-forward, .mini-player-btn.fa-backward');
    
    controlButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('播放器控制:', this.className);
        });
    });
}

/**
 * 处理导航点击事件
 */
function handleNavigation() {
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function(e) {
            // 在这里可以添加页面切换的动画
            // 此处不阻止默认事件，允许正常导航
        });
    });
}

/**
 * 创建播客卡片元素
 * @param {Object} podcast - 播客数据对象
 * @return {HTMLElement} - 播客卡片DOM元素
 */
function createPodcastCard(podcast) {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    
    card.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title}" class="podcast-image">
        <div class="podcast-content">
            <h3 class="podcast-title">${podcast.title}</h3>
            <p class="podcast-description">${podcast.description}</p>
            <div class="podcast-meta">
                <span>${podcast.author}</span>
                <span><i class="fas fa-headphones"></i> ${podcast.listens}</span>
            </div>
        </div>
    `;
    
    // 点击卡片跳转到详情页
    card.addEventListener('click', () => {
        window.location.href = `podcast-detail.html?id=${podcast.id}`;
    });
    
    return card;
}

/**
 * 创建剧集项元素
 * @param {Object} episode - 剧集数据对象
 * @return {HTMLElement} - 剧集项DOM元素
 */
function createEpisodeItem(episode) {
    const item = document.createElement('div');
    item.className = 'episode-item';
    
    item.innerHTML = `
        <div class="episode-title">${episode.title}</div>
        <div class="episode-date">${episode.date}</div>
        <div class="episode-duration">
            <i class="fas fa-clock"></i> ${episode.duration}
        </div>
    `;
    
    // 点击剧集跳转到播放器
    item.addEventListener('click', () => {
        window.location.href = `player.html?id=${episode.id}`;
    });
    
    return item;
}

// 导出公共函数
window.podcastUtils = {
    createPodcastCard,
    createEpisodeItem
}; 