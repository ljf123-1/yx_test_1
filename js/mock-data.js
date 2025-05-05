/**
 * 模拟数据
 * 提供应用所需的播客和剧集信息
 */

// 模拟推荐播客数据
const recommendedPodcasts = [
    {
        id: 1,
        title: '知识分享播客',
        description: '探索各种领域的知识，从科技到哲学，从历史到艺术。',
        author: '李明',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '2.3万'
    },
    {
        id: 2,
        title: '科技前沿',
        description: '深入了解最新科技趋势和创新，探讨它们如何改变我们的生活。',
        author: '科技前沿团队',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '1.8万'
    },
    {
        id: 3,
        title: '商业洞察',
        description: '分析商业趋势、创业故事和成功企业家的经验与教训。',
        author: '张云',
        image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '1.5万'
    },
    {
        id: 4,
        title: '心理健康空间',
        description: '关注心理健康，提供实用建议和专业知识，帮助你改善心理状态。',
        author: '王心理师',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '9.2千'
    }
];

// 模拟热门播客数据
const trendingPodcasts = [
    {
        id: 5,
        title: '历史回响',
        description: '走进历史长河，探索那些被遗忘或鲜为人知的历史事件。',
        author: '历史研究社',
        image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '3.1万'
    },
    {
        id: 6,
        title: '音乐人生',
        description: '探索不同音乐风格背后的故事，了解伟大音乐家的创作历程。',
        author: '音乐爱好者俱乐部',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '2.6万'
    },
    {
        id: 7,
        title: '旅行者日记',
        description: '跟随旅行者的脚步，探索世界各地的美景和文化。',
        author: '世界旅行者',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '1.9万'
    },
    {
        id: 8,
        title: '创意工作室',
        description: '激发你的创造力，探索各种艺术形式和创意表达方式。',
        author: '创意联盟',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        listens: '1.4万'
    }
];

// 模拟分类数据
const categories = [
    { id: 1, name: '全部' },
    { id: 2, name: '科技' },
    { id: 3, name: '商业' },
    { id: 4, name: '教育' },
    { id: 5, name: '健康' },
    { id: 6, name: '艺术' },
    { id: 7, name: '社会' },
    { id: 8, name: '娱乐' },
    { id: 9, name: '新闻' },
    { id: 10, name: '体育' }
];

// 模拟播客详情数据
const podcastDetails = {
    1: {
        id: 1,
        title: '知识分享播客',
        author: '李明',
        description: '探索各种领域的知识，从科技到哲学，从历史到艺术。我们邀请各行各业的专家，分享他们的专业知识和经验，帮助听众拓宽视野，增长见识。',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        subscribers: '4.5万',
        episodes: [
            {
                id: 101,
                title: 'Vol.23 如何高效学习一门新技能',
                date: '2023-05-21',
                duration: '48分钟',
                description: '在这一集中，我们探讨了高效学习新技能的方法和策略，包括刻意练习、间隔重复和知识迁移等技术。'
            },
            {
                id: 102,
                title: 'Vol.22 人工智能的伦理问题',
                date: '2023-05-14',
                duration: '52分钟',
                description: '随着AI技术的快速发展，伴随而来的伦理问题也越来越受到关注。本集邀请了伦理学家探讨AI发展中的伦理边界。'
            },
            {
                id: 103,
                title: 'Vol.21 古代文明的神秘仪式',
                date: '2023-05-07',
                duration: '45分钟',
                description: '从埃及到玛雅，从巴比伦到印加，我们探索了古代文明中那些神秘而又令人着迷的仪式背后的含义。'
            },
            {
                id: 104,
                title: 'Vol.20 现代艺术的转折点',
                date: '2023-04-30',
                duration: '50分钟',
                description: '本集探讨了20世纪初现代艺术的关键转折点，以及这些变革如何塑造了今天的艺术世界。'
            }
        ]
    },
    // 其他播客详情数据...
};

// 模拟剧集播放数据
const episodePlayback = {
    101: {
        id: 101,
        title: 'Vol.23 如何高效学习一门新技能',
        podcastId: 1,
        podcastTitle: '知识分享播客',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        duration: '48:23',
        currentTime: '0:00',
        description: '在这一集中，我们探讨了高效学习新技能的方法和策略，包括刻意练习、间隔重复和知识迁移等技术。我们邀请了学习专家张教授，分享他对学习过程的研究和实践经验。无论你想学习一门新语言、乐器还是任何技能，这些方法都能帮助你更快速有效地掌握它们。',
        date: '2023-05-21'
    },
    // 其他剧集播放数据...
};

// 模拟用户数据
const userData = {
    username: '播客爱好者',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subscriptions: 28,
    favorites: 42,
    history: 156,
    recentlyPlayed: [
        {
            id: 101,
            title: 'Vol.23 如何高效学习一门新技能',
            podcast: '知识分享播客',
            image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            progress: 75 // 百分比
        },
        {
            id: 105,
            title: 'S2E05 下一代移动技术',
            podcast: '科技前沿',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            progress: 100 // 百分比
        },
        {
            id: 110,
            title: '创业案例分析：从0到1的历程',
            podcast: '商业洞察',
            image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            progress: 30 // 百分比
        }
    ],
    subscribed: [1, 2, 5, 7]
};

// 导出所有数据
window.mockData = {
    recommendedPodcasts,
    trendingPodcasts,
    categories,
    podcastDetails,
    episodePlayback,
    userData
}; 