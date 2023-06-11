<!--docs/.vuepress/components/iframeComp.vue-->
<template>
    <!--iframe class="video-iframe" width="100%" v-resize="{ log: true }" frameborder="no" scrolling="no" seamless="" allowfullscreen="allowfullscreen" :src="ihtml"></iframe-->
    <div style="position: relative; padding: 30% 45%;">
        <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" :src="`https://player.bilibili.com/player.html?bvid=${bvid}&page=2&danmaku=0&high_quality=1`" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
    </div>
</template>

<script>
  export default {
      props: {
        bvid: {
            type: String
        }
      },
      mounted(){
            function changeVideoIframe(){
                const video = document.getElementsByClassName('video-iframe');
                const width = document.getElementsByClassName('video-iframe')[0].scrollWidth;
                for(let i = 0;i<video.length;i++){
                    video[i].style.height = width*0.75+'px'
                }
            }
            changeVideoIframe()
            window.onresize = function(){changeVideoIframe()}
      }
  }
</script>
