// ==UserScript==
// @name         删除csdn的AI写代码和右下角deepseek和手机图标
// @namespace    https://github.com/Tyro-yxk/csdn-remove-element
// @version      0.0.1
// @description  try to take over the world!
// @author       tyro-yxk
// @match        http*://blog.csdn.net/*/article/details/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEX8VTH8USz8Tyj8Tif8Uy78TST8eF38kn79mIb8fGP8Wjb+zsb+493/8/D+6+j+0sv9nYr8b1L/9/X////9xbj9va7+3NP9qpn8Zkj+6OL8Rhb8Sx/9x7v8gmr8YD39pJT8iHD/+vn+tqn8j3j9sKPVly74AAAA5klEQVR4Aa2SRZLDQBAENSQcsKbErJX//8Ulk3DRec2uiCbnSRDKKOF7hgvH9XwvCNlOyvEjqZSW5rQJ0ziyuGCNWDsJwCZpBgD5wpKiBJRX1XVVREBSz2XdAGUrLh2nOibzYAzY07VLTkO6CEaA6e49LprloYLthbMLHUZol+xL0Y+QzgH1CyCrv0iRA5IcSDqtGpoX8s5iPNcPFbOZrRNATzW/nDU05UDnUQDqHFbvOCcNZPP2WHu5pJQKHzT1cklyxA0VdXzZcZEbqZXSZdZ49fpPiAjdyfe9tmB07/0IZZfX/DdvphAP/wvKn48AAAAASUVORK5CYII=
// @grant        none
// @updateURL
// @downloadURL https://github.com/Tyro-yxk/csdn-remove-element/blob/master/%E5%88%A0%E9%99%A4csdn%E7%9A%84%E5%9B%BE%E6%A0%87.js
// @supportURL  https://github.com/Tyro-yxk/csdn-remove-element/issues
// ==/UserScript==

(function() {
    'use strict';
    // ai写代码的按钮
    document.querySelectorAll('.btn-code-notes').forEach(element => {
        element.remove();
    });
    // 直接删除ai写代码后的复制按钮很丑

    function overrideTargetStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
           main div.blog-content-box pre .hljs-button.active {
             width: initial !important;
           }
           main div.blog-content-box pre .hljs-button.add_def {
             right: 0 !important;
           }
        `;
        document.head.appendChild(style);
        console.log('已添加覆盖样式');
    }

    // 执行覆盖
    overrideTargetStyle();

    document.querySelectorAll('.no—h').forEach(element => {
        element.remove();
    });

    //setTimeout(() => {
    //  const deepseek = document.querySelector('#sidecolumn-deepseek');
    //if (deepseek) deepseek.remove();
    //},900);

    function safeRemoveElement(selector, retryDelay = 100, maxRetries = 10) {
        let retries = 0;

        function attemptRemove() {
            const element = document.querySelector(selector);
            if (element) {
                element.remove();
                console.log(`成功移除 ${selector}`);
            } else if (retries < maxRetries) {
                retries++;
                console.warn(`未找到 ${selector}, 重试中... (${retries}/${maxRetries})`);
                setTimeout(attemptRemove, retryDelay);
            } else {
                console.error(`无法找到 ${selector} 元素`);
            }
        }

        attemptRemove();
    }
    safeRemoveElement('#sidecolumn-deepseek');



})();