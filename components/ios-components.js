/**
 * iOS状态栏和导航栏组件
 * 用于在各个页面共享相同的iOS风格UI组件
 */

// 创建iOS风格状态栏
function createIOSStatusBar() {
    const statusBar = document.createElement('div');
    statusBar.className = 'ios-status-bar';
    
    // 获取当前时间
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    
    statusBar.innerHTML = `
        <div class="status-bar-left">
            ${currentTime}
        </div>
        <div class="status-bar-right">
            <i class="fas fa-signal"></i>
            <i class="fas fa-wifi ml-2"></i>
            <i class="fas fa-battery-three-quarters ml-2 battery-icon"></i>
        </div>
    `;
    
    return statusBar;
}

// 创建底部导航栏
function createBottomTabBar(activeTab = 'home') {
    const bottomTabBar = document.createElement('div');
    bottomTabBar.className = 'bottom-tab-bar';
    
    const tabs = [
        { id: 'home', icon: 'fa-home', label: '首页', link: 'home.html' },
        { id: 'discover', icon: 'fa-compass', label: '发现', link: 'discover.html' },
        { id: 'subscriptions', icon: 'fa-heart', label: '订阅', link: 'subscriptions.html' },
        { id: 'profile', icon: 'fa-user', label: '我的', link: 'profile.html' }
    ];
    
    tabs.forEach(tab => {
        const tabItem = document.createElement('a');
        tabItem.className = `tab-item ${tab.id === activeTab ? 'active' : ''}`;
        tabItem.href = tab.link;
        tabItem.innerHTML = `
            <i class="fas ${tab.icon}"></i>
            <span>${tab.label}</span>
        `;
        bottomTabBar.appendChild(tabItem);
    });
    
    return bottomTabBar;
}

// 创建迷你播放器
function createMiniPlayer(visible = true) {
    const miniPlayer = document.createElement('div');
    miniPlayer.className = 'mini-player';
    miniPlayer.style.display = visible ? 'flex' : 'none';
    
    miniPlayer.innerHTML = `
        <img src="../img/podcast-cover-1.jpg" alt="播放中的播客" class="mini-player-image">
        <div class="mini-player-info">
            <div class="mini-player-title">Vol.23 如何高效学习一门新技能</div>
            <div class="mini-player-podcast">知识分享播客</div>
        </div>
        <div class="mini-player-controls">
            <i class="fas fa-backward mini-player-btn"></i>
            <i class="fas fa-play mini-player-btn"></i>
            <i class="fas fa-forward mini-player-btn"></i>
        </div>
    `;
    
    // 点击迷你播放器跳转到播放页面
    miniPlayer.addEventListener('click', () => {
        window.location.href = 'player.html';
    });
    
    return miniPlayer;
}

// 初始化页面基本结构
function initPageStructure(options = {}) {
    const { 
        title = '小宇播客',
        activeTab = 'home',
        showMiniPlayer = true,
        showTabBar = true,
        extraHeaderContent = null
    } = options;
    
    // 设置页面标题
    document.title = title;
    
    // 添加状态栏
    const statusBar = createIOSStatusBar();
    document.body.appendChild(statusBar);
    
    // 创建内容容器
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    document.body.appendChild(contentContainer);
    
    // 添加额外的头部内容
    if (extraHeaderContent) {
        contentContainer.appendChild(extraHeaderContent);
    }
    
    // 在底部添加迷你播放器
    if (showMiniPlayer) {
        const miniPlayer = createMiniPlayer();
        document.body.appendChild(miniPlayer);
    }
    
    // 在底部添加导航栏
    if (showTabBar) {
        const bottomTabBar = createBottomTabBar(activeTab);
        document.body.appendChild(bottomTabBar);
    }
    
    return contentContainer;
}

// 导出方法
window.iosComponents = {
    createIOSStatusBar,
    createBottomTabBar,
    createMiniPlayer,
    initPageStructure
}; 