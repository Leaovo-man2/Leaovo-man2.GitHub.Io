
// 获取所有的copy-container容器
const copyContainers = document.querySelectorAll('.copy-container');

// 遍历每个容器，并为其添加复制功能
copyContainers.forEach(container => {
  // 找到代码块并获取其内容
  const codeBlock = container.querySelector('code');
  const code = codeBlock.innerText.trim();
  
  // 创建一个textarea元素，并将代码块内容复制到其中
  const textarea = document.createElement('textarea');
  textarea.value = code;
  
  // 将textarea元素添加到容器中
  container.appendChild(textarea);
  
  // 选中textarea内容并执行复制操作
  textarea.select();
  document.execCommand('copy');
  
  // 删除textarea元素
  container.removeChild(textarea);
  
  // 添加相应的提示文本
  const copyButton = container.querySelector('.copy-button');
  copyButton.innerText = '已复制';
  copyButton.style.display = 'block';
});
