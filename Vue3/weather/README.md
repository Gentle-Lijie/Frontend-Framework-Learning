# 2️⃣ 天气查询应用

## 项目概述
一个实时天气查询 SPA，支持搜索城市、查看详细天气信息和收藏常用城市。

## 核心功能
- 🌍 **城市搜索**
  - 搜索框输入城市名称
  - 自动完成建议（防抖优化）
  - 支持中英文城市名
  - 错误提示（城市未找到）

- ☀️ **天气展示**
  - 当前温度、体感温度
  - 天气状况（晴/雨/雪等）+ 动态图标
  - 湿度、风速、气压
  - 日出日落时间
  - 未来 5-7 天天气预报

- ⭐ **收藏功能**
  - 收藏常用城市
  - 快速切换收藏的城市
  - 本地保存收藏列表
  - 删除收藏

- 🎨 **UI 特色**
  - 根据天气状况改变背景（晴天蓝色、雨天灰色等）
  - 温度单位切换（摄氏度/华氏度）
  - 骨架屏加载效果
  - 响应式设计（移动端友好）

## 技术栈
```javascript
{
  "核心": "Vue 3 + Composition API",
  "HTTP请求": "Axios",
  "API":  "OpenWeatherMap / 和风天气",
  "状态管理": "Pinia (可选)",
  "样式": "CSS3 动画 + Flexbox/Grid",
  "工具": "day.js (日期处理)"
}
```

## 项目结构
```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.vue       # 搜索组件
│   │   ├── CurrentWeather.vue  # 当前天气
│   │   ├── Forecast.vue        # 天气预报
│   │   ├── FavoriteList.vue    # 收藏列表
│   │   └── WeatherIcon.vue     # 天气图标
│   ├── api/
│   │   └── weather.js          # API 封装
│   ├── composables/
│   │   ├── useWeather.js       # 天气数据逻辑
│   │   └── useFavorites.js     # 收藏逻辑
│   ├── utils/
│   │   ├── storage.js
│   │   └── debounce.js         # 防抖函数
│   ├── App.vue
│   └── main.js
└── . env                        # API Key 配置
```

## 学习要点
- Axios HTTP 请求和错误处理
- 异步数据获取（async/await）
- API 集成和环境变量
- 防抖和节流优化
- 动态样式绑定
- 组件状态管理
- 加载状态和错误处理

## API 推荐
```javascript
// 免费天气 API
// 1. OpenWeatherMap:  https://openweathermap.org/api
// 2. 和风天气: https://dev.qweather.com/
// 3. WeatherAPI: https://www.weatherapi.com/
```