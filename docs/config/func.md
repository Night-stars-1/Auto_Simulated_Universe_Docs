<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-29 19:36:20
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-05-29 19:51:16
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
## 网络代理
`[proxies]`
| Key        | 值类型           | 说明  |
| ------------- |:-------------:| -----:|
| http:// | 网页链接 | http代理 |
| https:// | 网页链接 | https代理 |
| socks5:// | 网页链接 | socks5代理 |

::: details 参考配置
```json
"proxies": {
    "http://": "http://127.0.0.1:7890",
    "https://": "http://127.0.0.1:7891",
    "socks5://": "socks5://127.0.0.1:7892",
}
```
:::