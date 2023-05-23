# 配置
## 配置相关
 * 我希望你能把必看的看完，没看完就问，不给予回答，请换个程序用，别找我

# 配置详情
| Key        | 值类型           | 说明  |
| ------------- |:-------------:| -----:|
| real_width | 数值 | 转化后的宽度 |
| real_height | 数值 | 转化后的高度 |
| auto_battle_persistence | 数值 | 是否开启自动战斗 |
| map_debug | 布尔值 | 是否全部更新 |
| github_proxy | 字符串 | github代理 |
| rawgithub_proxy | 字符串 | rawgithub代理 |
| webhook_url | 字符串 | 未知 |
| start | 布尔值 | 是否首次启动 |
| temp_version | 数值 | 未知 |
| star_version | 数值 | 未知 |
| open_map | 字符串 | 打开地图的按键 |
| script_debug | 布尔值 | 是否更新脚本 |
| presets | 列表 | 队伍预设 |
| map_version | 数值 | 未知 |

## 完整配置参考
```json
{
    "real_width": 0,
    "auto_battle_persistence": 0,
    "real_height": 0,
    "map_debug": false,
    "github_proxy": "",
    "rawgithub_proxy": "",
    "webhook_url": "",
    "start": true,
    "temp_version": "0",
    "star_version": "0",
    "open_map": "m",
    "script_debug": false,
    "presets": [
        [
            "丹恒",
            "火主",
            "姬子",
            "娜塔莎"
        ]
    ],
    "map_version": "0"
}
```