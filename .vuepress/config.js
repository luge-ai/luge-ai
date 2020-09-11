/**
 * @file : file
 * @author: xxx
 * @date: 2020-02-14 00:39:52
 */

module.exports = {
    title: '千言（LUGE）| 全面的中文开源数据集合',
    base: '/',
    dest: 'build',
    host: '0.0.0.0',
    head: [
        ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?9c32cb64f61e52065c210729d6cbe6e0";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })(); 
        `]
    ],
    themeConfig: {
        navbar: false,
        smoothScroll: true,
        displayAllHeaders: true,
        sidebar: 'auto'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'less-loader'
            }
        ]
    },
    markdown: {
        anchor: {
            // permalink: false,
            // permalinkBefore: false
        },
        extendMarkdown: md => {
            // 如果覆盖，或者是对默认渲染器的代理，则记住老的渲染器。
            const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
                return self.renderToken(tokens, idx, options);
            };
            md.renderer.rules.image = (tokens, idx, options, env, self) => {
                let src = tokens[idx].attrGet('src');
                if (src) {
                    const charArr = ['.', '~', '@', '/'];
                    // 不是以上开头 且没有 冒号的 认为是相对路径 前面加上./
                    const firstChar = src.charAt(0);
                    if (!charArr.includes(firstChar) && src.indexOf(':') === -1) {
                        src = `./${src}`;
                        const srcIndex = tokens[idx].attrIndex('src');
                        tokens[idx].attrs[srcIndex][1] = src;
                    }
                }
                // 传递 token 到默认的渲染器。
                return defaultRender(tokens, idx, options, env, self);
            };
        }
    }
};
