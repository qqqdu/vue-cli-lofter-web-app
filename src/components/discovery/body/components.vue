<script>
import {mapState, mapMutations} from 'vuex'

export default {
  render: function(h) {
            let child = [],
                 discovery = this.discovery;

            discovery.content.map(function(val){
            	child.push(h(val,{}));
            })
            return h('div',{
            	class : 'contents',
            	style : {
            		width : discovery.pageAll.length * 20 + 'rem'
            	}
            },child)
  },
  data : function(){
    return {
       moveImg : {
          width : 0,
          el : null,
          nowNum : 0,
          allNum : 0,
          duration : 3000
        }
    }
  },
  mounted (){
    this.init();
  },
  computed :{
  	 ...mapState(['discovery'])
     
  },
  methods : {
  	
  	...mapMutations(['REQUIRECOM','GOTODISCOVER']),
    moveLeft (){
      this.moveImg.width-=20;
      this.moveImg.nowNum++;
      this.GOTODISCOVER(this.discovery.nowPage+1)
      this.moveNow();
    },
    moveRight (){
      this.moveImg.width+=20;
      this.moveImg.nowNum--;
      this.GOTODISCOVER(this.discovery.nowPage-1)
      this.moveNow();
    },
    moveNow (){
      this.moveImg.el.style.transition = '.3s'; 
      this.moveImg.el.style.transform = `translate3d(${-this.discovery.nowPage*20}rem,0,0)`;
    },
    bindEvent (){
      let el = this.moveImg.el,
              elX,
              elY,
              nowX,
              nowY,
              moveX,
              moveOff=false, //move or can not move
              startT,
              endT;
      let eventObj = {
        moveEvent :ev=>{
               let nowPage = this.discovery.nowPage;
               moveX = ev.touches[0].clientX - elX;
               nowX = moveX + document.documentElement.clientWidth*(-this.discovery.nowPage*20)/20;
               nowY = ev.touches[0].clientY - elY;
               if(!moveOff){
                  if(!eventObj.checkY())
                    return false;
               }
               if(!this.checkAll(nowX))
                 return false;
               if(nowX>0)
               		this.REQUIRECOM(nowPage-1)
               else if(nowX<0)
               		this.REQUIRECOM(nowPage+1)
               else
               		{}
               this.moveImg.el.style.transition = '-1s';
               this.moveImg.el.style.transform = `translate3d(${nowX}px,0,0)`;
               
        },
        endEvent :ev=>{
            
            this.moveImg.el.removeEventListener('touchmove',eventObj.moveEvent,false);
            this.moveImg.el.removeEventListener('touchend',eventObj.endEvent,false);
            endT = new Date();
            moveOff=false;
            if(endT&&endT-startT<100){
                eventObj.checkX.call(this);
                return;
            }
            if(Math.abs(moveX)>=document.documentElement.clientWidth/2){
                eventObj.checkX.call(this);
                return;
            }
            this.moveNow();
        },
        checkX : ()=>{
            if(moveX>0){
              this.moveRight();
            }
            if(moveX<0){
              this.moveLeft();
            } 
        },
        checkY : ()=>{
          if(Math.abs(nowY)>0){
            return moveOff = false;
             
          }
          return moveOff = true;

        }
      };
      el.addEventListener('touchstart',(ev)=>{
        elX = ev.touches[0].clientX;
        elY = ev.touches[0].clientY;
        startT = new Date();
        el.addEventListener('touchmove',eventObj.moveEvent)
        el.addEventListener('touchend',eventObj.endEvent)  
      })
    },
    init (){
      let content = this.discovery.barType;
      this.moveImg.el = document.querySelector(".contents");
      this.moveImg.allNum = content.length;
      this.moveImg.el.style.width = (content.length)*20 + 'rem';
      this.bindEvent();
    },
    checkAll (nowX){
         if(this.discovery.nowPage>=this.moveImg.allNum){
            if(nowX<=0)
              return false;
          }
         if(this.discovery.nowPage<=0){
            if(nowX>=0)
              return false;
        }
        return true;
    }
  }
}
</script>
