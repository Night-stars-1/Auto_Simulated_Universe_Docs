<template><div><h1 id="auto-simulated-universe" tabindex="-1"><a class="header-anchor" href="#auto-simulated-universe" aria-hidden="true">#</a> Auto_Simulated_Universe</h1>
<p>星穹铁道-模拟宇宙全自动化</p>
<p>有一定的断点回复功能，你可以切出去做其他事，切回来会继续自动化。</p>
<p>目前只支持模拟宇宙4（数据不全）和6，地图数据基本录完了</p>
<hr>
<h2 id="免责声明" tabindex="-1"><a class="header-anchor" href="#免责声明" aria-hidden="true">#</a> 免责声明</h2>
<p>本软件是一个外部工具旨在自动化崩坏星轨的游戏玩法。它被设计成仅通过现有用户界面与游戏交互,并遵守相关法律法规。该软件包旨在提供简化和用户通过功能与游戏交互,并且它不打算以任何方式破坏游戏平衡或提供任何不公平的优势。该软件包不会以任何方式修改任何游戏文件或游戏代码。</p>
<p>This software is open source, free of charge and for learning and exchange purposes only. The developer team has the final right to interpret this project. All problems arising from the use of this software are not related to this project and the developer team. If you encounter a merchant using this software to practice on your behalf and charging for it, it may be the cost of equipment and time, etc. The problems and consequences arising from this software have nothing to do with it.</p>
<p>本软件开源、免费，仅供学习交流使用。开发者团队拥有本项目的最终解释权。使用本软件产生的所有问题与本项目与开发者团队无关。若您遇到商家使用本软件进行代练并收费，可能是设备与时间等费用，产生的问题及后果与本软件无关。</p>
<p>请注意，根据MiHoYo的 <a href="%5Bhttps://hsr.hoyoverse.com/en-us/news/111244%5D(https://sr.mihoyo.com/news/111246?nav=news&amp;type=notice)">崩坏:星穹铁道的公平游戏宣言</a>:</p>
<pre><code>&quot;严禁使用外挂、加速器、脚本或其他破坏游戏公平性的第三方工具。&quot;
&quot;一经发现，米哈游（下亦称“我们”）将视违规严重程度及违规次数，采取扣除违规收益、冻结游戏账号、永久封禁游戏账号等措施。&quot;
</code></pre>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3>
<p>只支持1920*1080(窗口化或全屏幕)，开启祝福详细描述，文本语言选择简体中文。（屏幕分辨率等于1920*1080开全屏幕，大于的开窗口化）</p>
<p>默认世界：比如说如果你当前模拟宇宙默认世界4，但是想自动化世界6，那么请先进入一次世界6来改变默认世界</p>
<p>如果没怎么接触过python，建议直接在release中下载gui版本，并直接阅读GUI使用方法</p>
<p><strong>第一次运行</strong></p>
<p>双击install_requirements.bat安装依赖库</p>
<p>进入游戏，将人物传送到黑塔的办公室，然后双击 <strong>align.bat</strong> ，切回游戏界面，等待视角转换/原地转圈结束</p>
<p>如果<strong>align.bat</strong>闪退，可以尝试管理员运行<pre><code>python align_angle.py
</code></pre></p>
<p>如果改变了鼠标dpi或游戏分辨率/屏幕分辨率/窗口缩放倍率，需要重新校准！</p>
<p><strong>运行自动化</strong></p>
<p>人物靠近模拟宇宙（出现f键交互条）</p>
<p>双击run.bat 或者 管理员权限运行 <pre><code>python states.py --find=1
</code></pre></p>
<p>info.txt中第一行保存了模拟宇宙开局选的角色，建议改成自己的配队，1表示第一个角色。最好在一号位选远程角色（艾丝妲、三月七）方便开怪。第二行是校准数据，不要改第二行！</p>
<p>第三行是宇宙的难度，如果你要打难度1就改成1保存。第四行是命途选择，默认巡猎，可以直接修改为其它命途，对巡猎做了专门优化，因此除非万不得已不要改命途。</p>
<p>第五行是地图数据的版本，不建议更改。</p>
<p>默认是哪个宇宙就会进哪个！如果你默认不是第6世界，记得先手动切到第6世界！</p>
<p>注意！！！！！ 开始运行/开始校准之后就不要移动游戏窗口了！要移动请先停止自动化！</p>
<p><strong>更新文件</strong></p>
<p>双击update.bat</p>
<h3 id="gui使用方法" tabindex="-1"><a class="header-anchor" href="#gui使用方法" aria-hidden="true">#</a> GUI使用方法</h3>
<p><strong>第一次运行</strong></p>
<p>进入游戏，将人物传送到黑塔的办公室，然后点击校准，等待视角转换/原地转圈结束并弹出校准成功。</p>
<p>如果改变了鼠标dpi或游戏分辨率/屏幕分辨率/窗口缩放倍率，需要重新校准！</p>
<p>在设置中选择自己想要的难度和命途，配队请用三个空格隔开四个数字，1表示第一个角色（编号规则示意见下图）。最好在一号位选远程角色（艾丝妲、三月七）方便开怪。</p>
<p><img src="https://github.com/CHNZYX/Auto_Simulated_Universe/blob/main/imgs/team.jpg" alt="配队编号"></p>
<p>比如说这张图中，你想选择娜塔莎，景元，希儿，彦卿，那么请在配队中输入：6 4 3 2</p>
<p><strong>运行自动化</strong></p>
<p>人物靠近模拟宇宙（出现f键交互条）</p>
<p>点击运行</p>
<p>注意！！！！！ 开始运行/开始校准之后就不要移动游戏窗口了！要移动请先停止自动化！</p>
<p><strong>TIPS：</strong></p>
<p>F8/‘停止’按钮停止运行。</p>
<p>显隐表示显示/隐藏命令行窗口，默认隐藏</p>
<p>调试模式：√表示迷路后不再结算，—表示在√的基础上遇到相似度低的地图会暂停运行</p>
<p>如果不希望迷路后退出结算，请将调试模式变为√</p>
<p>速通模式：√表示只打每层最后一个怪，—表示在√的基础上开启奔跑</p>
<p>左下角为更新地图按钮（只会更新地图，不会更新本体）</p>
<p>录制地图参见后文</p>
<p>推荐最低画质配置：</p>
<p><img src="https://github.com/CHNZYX/Auto_Simulated_Universe/blob/main/imgs/image_quality.jpg" alt="画质"></p>
<h3 id="通知插件使用方法-notif-exe" tabindex="-1"><a class="header-anchor" href="#通知插件使用方法-notif-exe" aria-hidden="true">#</a> 通知插件使用方法（notif.exe）</h3>
<p>如果你没有用本地多用户，那么直接双击notif.exe即可开启windows通知，每刷完一次都会通知哦</p>
<p>如果你用了本地多用户，那么请在子用户运行gui，在主用户运行notif，这样就能在主用户收到通知了</p>
<p>计数会在每周自动重置，如果想手动改变计数，请打开logs/notif.txt，修改第一行的信息</p>
<p>通知插件会在右下角显示托盘图标</p>
<hr>
<h3 id="部分逻辑" tabindex="-1"><a class="header-anchor" href="#部分逻辑" aria-hidden="true">#</a> 部分逻辑</h3>
<p>选祝福的逻辑是硬选巡猎，事件基本都会跳过，最后一层不会强化祝福，奇物随机选。</p>
<p>寻路模块基于小地图</p>
<p>小地图中只会识别白色边缘线和黄色交互点。</p>
<hr>
<p>支持录制地图，具体方法为</p>
<p>运行 python states.py --debug=2 --find=1 （GUI版本：设置调试模式为-，然后点击运行）</p>
<p>如果遇到新图会角色停住，这时候结束自动化并且游戏中暂离模拟宇宙</p>
<p>然后运行 python states.py --debug=2 --find=0 （GUI版本：设置调试模式为-，然后点击录制）</p>
<p>运行后会自动进入地图，期间请不要移动鼠标也不要动键盘</p>
<p>几秒后角色会后退，然后前进。在角色前进时，你可以移动鼠标改变视角，也可以按键盘wasd。</p>
<p>在地图中绕一圈，感觉差不多就F8/ctrl+c结束进程能得到地图数据了。保存在imgs/maps/my_xxxxx目录下（可以按修改时间排序）</p>
<p>有怪的图最好用希儿战技，被锁定会影响小地图识别。</p>
<p>imgs/maps/my_xxxxx目录下会存在target.jpg，你可以用windows自带的画图打开它，然后在上面标记点（可以参考其它地图文件中的target.jpg）</p>
<p>靛蓝色：路径点 黄色：终点 绿色：交互点（问号点） 红色：怪点</p>
<p>录制结束后可以暂离并重新运行自动化测试地图，如果通过测试，你就成功录制到了新图！</p>
<hr>
<p>欢迎加入，欢迎反馈bug，QQ群：831830526</p>
<hr>
<p>如果喜欢本项目，可以打赏送作者一杯咖啡喵！</p>
<p><img src="https://github.com/CHNZYX/Auto_Simulated_Universe/blob/main/imgs/money.jpg" alt="打赏"></p>
</div></template>


