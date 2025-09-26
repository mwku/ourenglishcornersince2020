const element_template =`<div class="block">
            <div class="title">
                {{title}}
            </div>
            <div class="text">
                {{description}}
            </div>
            {{link}}
        </div>`
const bottom_element =`<div class="info">
            以上資料由 成功高中英語科 蔡力潔 老師 提供
        </div>`
document.addEventListener('DOMContentLoaded', function() {
    let mainDiv = document.getElementById('main');
    fetch('./data.json')
        .then(response => response.json())
        .then(data=>{
            data.forEach(item => {
                let linkHtml = '';
                item.link.forEach((linkUrl, index) => {
                    const linkText = item.link.length === 1 ? 'link' : `link ${index + 1}`;
                    linkHtml += `<a href="${linkUrl}" target="_blank" class="link" ${item.link.length > 1 ? `style="bottom: ${(item.link.length-index) * 30}px;"` : ''}>${linkText}</a>`;
                });

                let blockHtml = element_template
                    .replace('{{title}}', item.title)
                    .replace('{{description}}', item.description)
                    .replace('{{link}}', linkHtml);

                mainDiv.innerHTML += blockHtml;
            });
        })
        .then(() => {
            mainDiv.innerHTML += bottom_element;
        })
        .catch(error => {
            console.error('載入資料時發生錯誤:', error);
        });
});