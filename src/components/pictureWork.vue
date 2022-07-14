<template>
    <div class="main">
                <canvas id="canvas-cut" style="position:fixed;left:100%;" width="200" height="200">
            </canvas>
        <div class="picuurelist" >
            <div class="imgTotalBox" >      
            <div class="imgBox" v-for="item,i in pictureList" :key="i" >
                <img class="img" draggable="false"  :style="basisStyle" :src="item.src" alt="无资源">

                <img class="img move_img"  draggable="false"  :style="'position:absolute;z-index:99;left:0px;top:0px;'" :src="item.src" alt="无资源" @mousedown="movedownpicture(item,$event)" @mousemove="movepicture(item,$event)" @mouseup="mouseuppicture">
            </div>
            </div>
        </div>
        <div class="bottom">
                <div class="ruler" @click="rulerClick">
                    <div id="bottomImg" ref="bottomImg" class="imgBox" :style="item.styleWidth" v-for="item,i in rulerPictureList" :key="i" @mouseleave="leaveImg(item,$event)"  @mouseover="overImg(item)" @mousedown="rulerImgDown(item,i,$event)" @mousemove="rulerImgMove(item,$event)" @mouseup="rulerImgUp">
                    <div class="buttonGroup" v-show="item.isshow">
                        <el-button type="primary" @click="cutImg(i)" :disabled="item.isCut">剪切</el-button>
                        <el-button type="danger" @click="deleteImg(i)">删除</el-button>
                    </div>
                    <img   class="img" draggable="false"      :src="item.src" alt="无内容" >
                    </div>
                </div>
 

            </div>
    </div>
</template>

<script>
export default {
    name:"pictureWork",
        data() {
            const pictureList=[
        ]
        let mousedown=false,isMove=false,x,y;
        let x1,x2,y1,y2;
        //能否push图片到轨道
        let pushImg=true;
        let basisStyle="position:absolute;z-index:90;";
        //现在i的值
        let nowI;
        //上方图片
        for(let i=1;i<=8;i++){
            const img=new Image()
            img.src=require("../assets/picture/"+i+".jpg")
            img.left="0px";
            img.top="0px";
            img.isshow=false;
            img.imgWidth=200;
            img.styleWidth="width:200px;";
            img.isCut=false;
            img.onload=function(){
                console.log("图片"+i+"已经加载好！");
            }
            console.log(img);
            pictureList.push(img)
        }
        //下方图片
        let rulerPictureList=[
        ]
        return {
            pictureList,mousedown,isMove,basisStyle,rulerPictureList,x,y,x1,x2,y1,y2,pushImg,nowI
        }
    },
    methods: {
        overImg(item){
            item.isshow=true;
            this.$forceUpdate();
        },
        leaveImg(item,e){
            console.log(e);
            if(e.offsetY<=-1&&e.offsetY>=-49&&e.offsetX<=199&&e.offsetX>=1)return;
            item.isshow=false;
            this.$forceUpdate();
        },
        deleteImg(i){
            this.rulerPictureList.splice(i,1)
        },
        cutImg(i){
            this.rulerPictureList[i].isshow=false;
            this.$forceUpdate();
            var canvas = document.getElementById('canvas-cut');
			var cut = canvas.getContext('2d');
            let img = this.rulerPictureList[i];
            img.crossOrigin = 'Anonymous';
            let that=this;

			img.onload = function() {
                //第一章
                let that1=that;
            console.log("要剪切的图片的长宽为:",img.width,img.height);

				cut.drawImage(img,0,0,img.width/2,img.height,0,0,img.imgWidth/2,200);
				var imgbase64 = canvas.toDataURL("image/png");

                let imgnew1=new Image()
                imgnew1.src=imgbase64;
                imgnew1.left="0px";
                imgnew1.top="0px";
                imgnew1.isshow=false;
                imgnew1.imgWidth=img.imgWidth/2;
                imgnew1.styleWidth="width:"+img.imgWidth/2+"px;";
                imgnew1.width=img.width/2;
                imgnew1.height=img.height;
                imgnew1.isCut=true;
                imgnew1.onload=function(){
            console.log("要剪切的图片1的长宽为:",imgnew1.width,imgnew1.height);

                    //第二章
                    let that2=that1;
                    cut.drawImage(img,img.width/2,0,img.width/2,img.height,0,0,img.imgWidth/2,200);
                    imgbase64 = canvas.toDataURL("image/png");
                    let imgnew2=new Image()
                    imgnew2.src=imgbase64;
                    imgnew2.left="0px";
                    imgnew2.top="0px";
                    imgnew2.isshow=false;
                imgnew2.imgWidth=img.imgWidth/2;
                    imgnew2.width=img.width/2;
                imgnew2.height=img.height;
                imgnew2.isCut=true;
                imgnew2.styleWidth="width:"+img.imgWidth/2+"px;";
                    imgnew2.onload=function(){
                        let imglist=that2.$refs.bottomImg
                        for(let g of imglist ){
                        g.style.removeProperty("transition");
                        g.style.zIndex=99;
                        }
                        that2.rulerPictureList.splice(i,1,imgnew1,imgnew2)
                        setInterval(() => {
                                for(let g of imglist ){
                        g.style.transition="all 0.5s ease-out"
                        }
                        }, 500);
                                        
                        console.log("裁剪完的：",imgnew1.width,imgnew2.width);
                    }
                }



            }
			},
        
        rulerClick(e){
            console.log(e);
        },
        movepicture(item,e){
            if( this.mousedown===false){
                return;
            }
            let img=e.target;
            // let imgTotalBox=img.parentNode.parentNode;
            img.style.left=Number(item.left.split("px")[0])+e.clientX-this.x+"px";
            img.style.top=Number(item.top.split("px")[0])+e.clientY-this.y+"px";
            img.style.zIndex=100;

            if(this.pushImg===true&&e.clientX>this.x1&&e.clientX<this.x2&&e.clientY>this.y1&&e.clientY<this.y2){
                console.log(e);
                if(this.rulerPictureList.length<4)
            this.rulerPictureList.push(item);
            this.pushImg=false;
            }
        },
        movedownpicture(item,e){
            let img =e.target;
            this.x=e.clientX;
            this.y=e.clientY;
            item.left=img.style.left;
            item.top=img.style.top;
            this.mousedown=true;
            this.x1=e.clientX-e.target.offsetParent.offsetLeft-e.offsetX
            this.x2=this.x1+949;
            this.y2=900-35;
            this.y1=631+35;
        },
        mouseuppicture(e){
            this.mousedown=false;
            this.pushImg=true;
            let img =e.target;
            img.style.left=0+"px";
            img.style.top=0+"px";
            img.style.zIndex=99;
        },
        rulerImgDown(item,i,e){
            e.target.style.removeProperty("transition")
            this.nowI=i;
            this.mousedown=true;
            this.isMove=true;
            this.x=e.clientX;
            item.left=e.layerX+"px";
        },
        rulerImgMove(sendimg,e){
            e.target.style.removeProperty("transition")
            if(this.mousedown===false||this.isMove===false){return;}
            let img =e.target
            img.style.zIndex=100;
            img.style.left=e.clientX-this.x+"px";
            console.log(sendimg.imgWidth);
            let n=Math.floor((e.clientX-this.x)/sendimg.imgWidth);

            console.log(n,this.nowI);

            // let n=Math.floor((this.nowI*img.imgWidth+e.clientX-this.x)/200);
            if(n!=0&&n!=-1){
                if(n<-1){
                    n=this.nowI-1;
                    console.log(n,this.nowI);

                this.rulerPictureList.splice(this.nowI,1,...this.rulerPictureList.splice(n, 1 , this.rulerPictureList[this.nowI]));

                }
                else if(n>0){
                    n=this.nowI+1;
                    console.log(n,this.nowI);
                    if(n<this.rulerPictureList.length)
                    this.rulerPictureList.splice(this.nowI,1,...this.rulerPictureList.splice(n, 1 , this.rulerPictureList[this.nowI]));

                    }

                        let imglist=this.$refs.bottomImg
                        for(let item of imglist ){
                        item.isshow=false;
                        item.style.pointerEvents="none";
                        item.style.transition="all 0.5s ease-out";
                        item.style.zIndex=99;
                        item.style.removeProperty("left");

                        }
                        setTimeout(() => {
                            for(let item of imglist ){
                            item.style.removeProperty("pointer-events");
                        }
                        }, 500);
                this.mousedown=false;
                this.isMove=false;
                this.nowI=n;
                this.$forceUpdate();
            }
        },
        rulerImgUp(e){
            let img =e.target;
            this.mousedown=false;
            img.style.zIndex=99;
            let imglist=this.$refs.bottomImg
            console.log(imglist);

            for(let item of imglist ){
                item.isshow=false;
                item.style.pointerEvents="none";
                item.style.transition="all 0.5s ease-out";
                item.style.removeProperty("left");
            }
            setTimeout(() => {
                for(let item of imglist ){
                item.style.removeProperty("pointer-events");
            }
            }, 500);

        },
    },
    mounted()
        {
            document.onselectstart = function () { return false; }
        }
}
</script>

<style lang="scss">

    .main{
    margin: auto;
    width: 950px;
    min-width: 375px;
    height: 900px;
    border: 1px solid blue;
    .picuurelist{
        .imgTotalBox{
        position: relative;
        width: 100%;
        height: 630px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        border-bottom: 1px solid rgb(36, 149, 202);
                        .imgBox{
                position: relative;     
                margin: 30px 0 30px 0;

                width: 200px;
                height: 200px;     
                .img{
                width: 200px;
                height: 200px;
                }
                .move_img{
                    &:hover{
                        cursor: pointer;
                        filter:grayscale(50%);
                        filter: opacity(70%);
                        border:1px solid blue;
                        z-index: 999;
                    }
                }
                .imgSpan{
                    float: right;
                    margin-right: 10px;
                }
            }
        }


    }
    .bottom{
                position: relative;
            width: 100%;
            height: 270px;
            .ruler{
                position: relative;
                top: 50%;
                transform:translate(0,-50%);
                height: 200px;
                background-color:rgb(143, 151, 155);
                width: 100%;
                white-space: nowrap;
                .imgBox{
                        display: inline-block;
                        position:relative;
                        width: 200px;
                        height: 200px;
                        box-sizing: border-box;
                        // transition:all 1s ease-out;
                                            left: 0px;
                        top: 0px;
                        &:hover{
                            border: 2px solid blue;
                        }
                }
                .buttonGroup{
                    position:absolute;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    top: -50px;
                }
                    .img{
                        width: 200px;
                        height: 200px;
                        pointer-events: none;

                    }
            }
        }
    }
</style>