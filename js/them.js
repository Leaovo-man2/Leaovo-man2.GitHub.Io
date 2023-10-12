// 获取切换按钮和页面body元素
const themeBtn = document.getElementById('theme-btn')
const bodyEl = document.body

// 定义主题切换函数
function toggleTheme() {
  // 判断当前主题
  const isDay = bodyEl.classList.contains('day')

  // 根据当前主题切换样式
  if (isDay) {
    bodyEl.classList.remove('day')
    bodyEl.classList.add('night')
  } else {
    bodyEl.classList.remove('night')
    bodyEl.classList.add('day')
  }
}

// 添加点击事件监听
themeBtn.addEventListener('click', toggleTheme)
