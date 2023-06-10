<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:31
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-06-10 20:45:37
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
# 指南

## 友情提示
 * 教程已经写了很多了，请认真看完这个页面的安装教程，他并没有多少字，严格安装步骤操作不会出错，如果你没有认真看完麻烦不要进群询问，这是浪费别人时间
 
## 重要提示
::: danger 警告
本软件是一个外部工具旨在自动化崩坏星轨的游戏玩法。它被设计成仅通过现有用户界面与游戏交互,并遵守相关法律法规。该软件包旨在提供简化和用户通过功能与游戏交互,并且它不打算以任何方式破坏游戏平衡或提供任何不公平的优势。该软件包不会以任何方式修改任何游戏文件或游戏代码。

This software is open source, free of charge and for learning and exchange purposes only. The developer team has the final right to interpret this project. All problems arising from the use of this software are not related to this project and the developer team. If you encounter a merchant using this software to practice on your behalf and charging for it, it may be the cost of equipment and time, etc. The problems and consequences arising from this software have nothing to do with it.

本软件开源、免费，仅供学习交流使用。开发者团队拥有本项目的最终解释权。使用本软件产生的所有问题与本项目与开发者团队无关。若您遇到商家使用本软件进行代练并收费，可能是设备与时间等费用，产生的问题及后果与本软件无关。


请注意，根据MiHoYo的 [崩坏:星穹铁道的公平游戏宣言](https://sr.mihoyo.com/news/111246?nav=news&type=notice):
```md:no-line-numbers
严禁使用外挂、加速器、脚本或其他破坏游戏公平性的第三方工具。
一经发现，米哈游（下亦称“我们”）将视违规严重程度及违规次数，采取扣除违规收益、冻结游戏账号、永久封禁游戏账号等措施。
```
:::

## Python的安装
 * 点击[绿色部分](https://www.python.org/downloads/release/python-3113/)安装Python3.11
 * 将页面拉至底部，下载`Windows installer (64-bit)`
 * 点击安装包进行安装
 * 勾选`Add Python 3.x to PATH`
 <img src="https://img06.mifile.cn/v1/MI_542ED8B1722DC/126cb397275a9756877965f2b16313e1.png" alt="foo">

## 启动星穹铁道小助手
 * 下载最新版[星穹铁道小助手](https://github.com/Starry-Wind/StarRailAssistant/releases/latest)
 * 解压文件，并进入文件夹
 * 复制文件夹路径
 * 右键开始菜单，选择`终端管理员`，输入`cd 刚刚复制的路径`
 * 输入`pip config set global.index-url https://mirrors.aliyun.com/pypi/simple`设置国内pip源
 * 输入`pip install -r requirements.txt`安装依赖
 * 输入`Python Honkai_Star_Rail.py`运行星穹铁道小助手

## 快速启动
 * 下载地址[快速启动](https://github.com/Starry-Wind/StarRailAssistant/releases/tag/快速启动)
 * `env.bat`为依赖安装脚本
 * `start.exe`为快速启动脚本
 
**ps: 所有文件请放在项目根目录执行**

## 适合小白的启动方式
 * **我们不推荐这种启动方式，如果你按照上面的教程实在无法启动再使用**
 * 下载[QQ群](https://qm.qq.com/cgi-bin/qm/qr?k=xdCO46fHlVcY7D2L7elXzqcxL3nyTGnW&jump_from=webapi&authKey=uWZooQ2szv+nG/re7luCKn8LW1KibSb0vvi0FycA45Mglm5AGM1GP2iJ+SiWmDwg)的`星穹铁道小助手.exe`然后双击运行，他在`整合包`文件夹中
 * **ps: 第一次启动可能会报错，请重新启动**
