const toggleButton = document.getElementById('toggleButton')
const collapseElement = document.getElementById('collapseExample')

// 初始状态为折叠
let isCollapsed = true
if (toggleButton && collapseElement) {
    // 点击按钮时切换折叠状态
    toggleButton.addEventListener('click', () => {
        if (isCollapsed) {
            // 如果当前是折叠状态，展开内容
            collapseElement.style.display = 'block'
        } else {
            // 如果当前是展开状态，折叠内容
            collapseElement.style.display = 'none'
        }
        // 切换折叠状态
        isCollapsed = !isCollapsed
    });
}
