<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<h2 id="配置相关" tabindex="-1"><a class="header-anchor" href="#配置相关" aria-hidden="true">#</a> 配置相关</h2>
<ul>
<li>我希望你能把必看的看完，没看完就问，不给予回答，请换个程序用，别找我</li>
</ul>
<h1 id="配置详情" tabindex="-1"><a class="header-anchor" href="#配置详情" aria-hidden="true">#</a> 配置详情</h1>
<table>
<thead>
<tr>
<th>Key</th>
<th style="text-align:center">值类型</th>
<th style="text-align:right">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>real_width</td>
<td style="text-align:center">数值</td>
<td style="text-align:right">转化后的宽度</td>
</tr>
<tr>
<td>real_height</td>
<td style="text-align:center">数值</td>
<td style="text-align:right">转化后的高度</td>
</tr>
<tr>
<td>auto_battle_persistence</td>
<td style="text-align:center">数值</td>
<td style="text-align:right">是否开启自动战斗</td>
</tr>
<tr>
<td>level</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">日志等级</td>
</tr>
<tr>
<td>github_proxy</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">github代理</td>
</tr>
<tr>
<td>rawgithub_proxy</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">rawgithub代理</td>
</tr>
<tr>
<td>webhook_url</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">未知</td>
</tr>
<tr>
<td>start</td>
<td style="text-align:center">布尔值</td>
<td style="text-align:right">是否首次启动</td>
</tr>
<tr>
<td>temp_version</td>
<td style="text-align:center">数值</td>
<td style="text-align:right">未知</td>
</tr>
<tr>
<td>star_version</td>
<td style="text-align:center">数值</td>
<td style="text-align:right">未知</td>
</tr>
<tr>
<td>open_map</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">打开地图的按键</td>
</tr>
<tr>
<td>adb</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">ADB的IP:端口</td>
</tr>
<tr>
<td>presets</td>
<td style="text-align:center">列表</td>
<td style="text-align:right">队伍预设</td>
</tr>
<tr>
<td>map_version</td>
<td style="text-align:center">数值</td>
<td style="text-align:right">未知</td>
</tr>
<tr>
<td>proxies</td>
<td style="text-align:center">字符串</td>
<td style="text-align:right">网络代理</td>
</tr>
</tbody>
</table>
<h2 id="完整配置参考" tabindex="-1"><a class="header-anchor" href="#完整配置参考" aria-hidden="true">#</a> 完整配置参考</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"real_width"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"auto_battle_persistence"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"real_height"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"level"</span><span class="token operator">:</span> <span class="token string">"INFO"</span><span class="token punctuation">,</span>
    <span class="token property">"github_proxy"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"rawgithub_proxy"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"webhook_url"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"temp_version"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"star_version"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"open_map"</span><span class="token operator">:</span> <span class="token string">"m"</span><span class="token punctuation">,</span>
    <span class="token property">"adb"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1:62001"</span><span class="token punctuation">,</span>
    <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"丹恒"</span><span class="token punctuation">,</span>
            <span class="token string">"火主"</span><span class="token punctuation">,</span>
            <span class="token string">"姬子"</span><span class="token punctuation">,</span>
            <span class="token string">"娜塔莎"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"map_version"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"proxies"</span><span class="token operator">:</span> <span class="token string">"socks5://your_socks5_proxy"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


