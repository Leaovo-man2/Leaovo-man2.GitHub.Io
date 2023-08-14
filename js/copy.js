[...document.getElementsByTagName("pre")].forEach(item => {
        item.style.position = "relative";
        let copyButton = document.createElement("button")
        copyButton.style.cssText = 'border-radius: 4px;position:absolute;right:10px;top:10px;cursor: pointer'
        copyButton.innerHTML = "复制";
        copyButton.onclick = function () {
            let copyData = item.firstChild.innerText
            copyToClipboard(copyData)
            copyButton.innerHTML = "复制成功";
            setTimeout(function() {
                copyButton.innerHTML = "复制";
            }, 1000);
        }
        item.appendChild(copyButton)
});
// js 复制到剪贴板
function copyToClipboard(content) {
    if (window.clipboardData) {
        window.clipboardData.setData('text', content);
    } else {
        (function (content) {
            document.oncopy = function (e) {
                e.clipboardData.setData('text', content);
                e.preventDefault();
                document.oncopy = null;
            }
        })(content);
        document.execCommand('Copy');
    }
}
