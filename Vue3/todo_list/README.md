# 1️⃣ Todo List 应用

## 项目概述
一个功能完善的待办事项管理应用，帮助用户组织和跟踪日常任务。

## 核心功能
- ✅ **任务管理**
  - 添加新任务（输入框 + 回车/按钮）
  - 编辑任务内容（双击编辑）
  - 删除任务（带确认提示）
  - 标记任务完成/未完成（复选框）
  
- 🏷️ **任务分类**
  - 全部任务
  - 进行中
  - 已完成
  - 使用底部导航切换视图

- 🎨 **交互功能**
  - 任务数量统计（总数、已完成、待完成）
  - 清除所有已完成任务
  - 任务优先级标记（高/中/低，用颜色区分）
  - 拖拽排序（可选）

- 💾 **数据持久化**
  - 使用 localStorage 保存数据
  - 页面刷新后数据不丢失

## 技术栈
```javascript
{
  "核心":  "Vue 3 + Composition API",
  "状态管理": "ref, reactive, computed",
  "样式": "CSS3 / SCSS / Tailwind CSS",
  "图标": "Font Awesome / Iconify",
  "构建工具": "Vite"
}
```

## 项目结构
```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoHeader.vue       标题和统计
│   │   ├── TodoInput.vue        输入框
│   │   ├── TodoList.vue         任务列表
│   │   ├── TodoItem.vue         单个任务
│   │   └── TodoFooter.vue       过滤和清除
│   ├── composables/
│   │   └── useTodos.js          任务逻辑复用
│   ├── utils/
│   │   └── storage.js           localStorage 封装
│   ├── App.vue
│   └── main.js
└── package.json
```

## 学习要点
- Vue 3 响应式系统（ref, reactive）
- 组件通信（props, emit）
- 计算属性和侦听器
- 列表渲染和条件渲染
- 事件处理和表单绑定
- Composables 复用逻辑
- 浏览器存储 API