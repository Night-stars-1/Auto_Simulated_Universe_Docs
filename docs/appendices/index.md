# 进阶
## 插件
### 文件列表
```sh
└─ plugins
    └─ sra_plugins_name
        │ 
        ├─ __init__.py
        │
        └─ main.py
```
**PS：**`__init__.py`和`main.py`为必须文件

### __init__.py示例
```python
import pluggy

plugin_name = "名称"
plugin_ver = "版本"

hookimpl = pluggy.HookimplMarker("SRA") # 注册插件
```

### main.py示例
```python
from . import *

def main(): # 点击菜单是触发
    print("开始")

@hookimpl
def add_option(SRA): # 启动脚本时触发
    print("启动")
    return SRA.add_option("菜单", main, 2) # 添加菜单选项，main为点击后触发的函数，2为菜单插入到第3行

@hookimpl
def stop(SRA): # 终止脚本时触发
    print("终止")

@hookimpl
def end(SRA): # 脚本运行结束时触发
    print("脚本运行结束")
```
**PS：**`SRA`未入口函数的实例