
window.onload=function(){
// 购物车选项卡
	let car=document.getElementsByClassName("car")[0]
	let shoppingbox=document.getElementsByClassName("shoppingbox")[0]
	console.log(car,shoppingbox)
	car.onmouseenter=function(){
		shoppingbox.style.height="98px";
		shoppingbox.style.boxShadow="0 2px 1px 1px #ededed"
	}
	car.onmouseleave=function(){
		shoppingbox.style.height="0px";
	}
// 侧导航
	let anqiubox=document.getElementsByClassName("anqiubox")[0]
	console.log(anqiubox);
	let li=anqiubox.getElementsByTagName("li")
	console.log(li)
	let asidebox=document.getElementsByClassName("asidebox")
    console.log(asidebox)
	 for(let i=0;i<li.length;i++){
       li[i].onmouseenter=function(){
       	for(let j=0;j<li.length;j++){
       		asidebox[j].style.display="none"
       	}
       	asidebox[i].style.display="block";
       }
       li[i].onmouseleave=function(){
       	asidebox[i].style.display="none";
       }
	}
// 家电
   function xxk(jiadian){ 
   let  xyou=jiadian.getElementsByClassName("xyou")
   let jyou=jiadian.getElementsByClassName("jyou")[0]
   let a=jyou.getElementsByTagName("a")
   console.log(jiadian,xyou,jyou,a);
   xyou[0].style.display="block";
   for(let i=0;i<a.length;i++){
   	a[i].onmouseenter=function(){
   		for(j=0;j<xyou.length;j++){
   		xyou[j].style.display="none"
   		a[j].style.borderBottom="none"	
   		a[j].style.paddingBottom="none"	
   		a[j].style.color="";
   		}
   		xyou[i].style.display="block"
   		a[i].style.borderBottom="2px solid #ff6700"
   		a[i].style.paddingBottom="4px"	
   		a[i].style.color="#ff6700";
   	}

   }
 }
 let jiadian=document.getElementsByClassName("jiadian")[0];
 xxk(jiadian);
 let jiadian1=document.getElementsByClassName("jiadian")[1];
 xxk(jiadian1);
 let jiadian2=document.getElementsByClassName("jiadian")[2];
 xxk(jiadian2);
 let jiadian3=document.getElementsByClassName("jiadian")[3];
 xxk(jiadian3);
 let jiadian4=document.getElementsByClassName("jiadian")[4];
 xxk(jiadian4);
 // daohang
let nav=document.getElementsByClassName("nav")[0]
let lei=nav.getElementsByTagName("a")
let headxiala=nav.getElementsByClassName("headxiala")
let headnei=nav.getElementsByClassName("headnei")
console.log(nav,lei,headxiala,headnei)
for(let i=0;i<lei.length;i++){
  lei[i].onmouseenter=function(){
     for(let j=0;j<lei.length;j++){
       headxiala[i].style.display="none" 
     } 
      headxiala[i].style.display="block" 

  }
  lei[i].onmouseleave=function(){
      headxiala[i].style.display="none"
     
}
}
// banner
  let imgbox=document.querySelectorAll(".imgbox li")
  let btnn=document.querySelectorAll(".btnn li")
  let banner=document.querySelector(".dibu")
  let btR=document.querySelector(".anniuyou")
  let btL=document.querySelector(".anniuzuo")
  console.log(imgbox,btnn,banner,btR,btL)
  let index=0;
  let t=setInterval(move, 3000);

  // 初始化
  imgbox[0].style.zIndex=10;
   btnn[0].className="hot"
   function move(){
    index++;
    if(index==imgbox.length){
      index=0;
    }
    imgbox.forEach(function(element,index,obj){
      element.style.zIndex=5;
    })
    btnn.forEach(function(element,index,obj){
      element.className=""
    })
     imgbox[index].style.zIndex=10
     btnn[index].className="hot"   
   }
   function movel(){
    index--;
    if(index<0){
      index=imgbox.length-1
    }
    imgbox.forEach(function(element){
      element.style.zIndex=5
    })
    btnn.forEach(function(element){
      element.className=""
    })
    imgbox[index].style.zIndex=10
    btnn[index].className="hot"
   }
   banner.onmouseenter=function(){
     clearInterval(t)
   }
   banner.onmouseleave=function(){
     t=setInterval(move, 3000)
   }
    btR.onclick=function(){
      move();
    }
    btL.onclick=function(){
      movel();
    }
   
   for(let i=0;i<btnn.length;i++){
    btnn[i].onclick=function(){
      imgbox.forEach(function(element){
        element.style.zIndex=5
      })
      btnn.forEach(function(element){
        element.className=""
      })
      imgbox[i].style.zIndex=10
      btnn[i].className="hot";
      index=i
    }
      
   }
  // 内容
  function dianka(tushu){
  let xiabu=tushu.querySelectorAll(".xiabuu")
  let dian=tushu.querySelector(".diandian")
  let adian=dian.querySelectorAll("a")
  let xiaoyu=tushu.querySelector(".xiaoyuan")
  let dayu=tushu.querySelector(".dayuan")
  let tushuwid=parseInt(getComputedStyle(tushu,null).width)
  console.log(tushu,xiabu,dian,adian,tushuwid,xiaoyu,dayu)
  let current=0,next=0;
   xiaoyu.onclick=function(){
    if(!flag){
      return
    }
    
    if(next==0){
      next=0
      return
    }
    flag=false
    move2();
   }
   dayu.onclick=function(){
    if(!flag){
      return
    }
    
    if(next==xiabu.length-1){
      next=xiabu.length-1
      return
    }
    flag=false
    move1();
   }
   let flag=true
  function move1(){
    next++
    if(next==xiabu.length){
   next=0
    }
    xiabu[next].style.left=tushuwid+"px"
    adian[current].classList.remove("hott")
    adian[next].classList.add("hott")
    animate(xiabu[next],{left:0})
    animate(xiabu[current],{left:-tushuwid},function(){
      flag=true;
    })
    current=next
  }
  function move2(){
    next--
    if(next<0){
    next=xiabu.length-1
    }
    xiabu[next].style.left=-tushuwid+"px"
    adian[current].classList.remove("hott")
    adian[next].classList.add("hott")
    animate(xiabu[next],{left:0})
    animate(xiabu[current],{left:tushuwid},function(){
      flag=true
    })
    current=next
  }
  adian.forEach(function(element,index,obj){
            element.onclick=function(){
              if(current==index){
                return;
              }
              adian[index].classList.add("hott")
              adian[current].classList.remove("hott")
               if(current<index){
                xiabu[index].style.left=tushuwid+"px"
                animate(xiabu[index],{left:0})
                animate(xiabu[current],{left:-tushuwid})
               }
               if(current>index){
                xiabu[index].style.left=-tushuwid+"px"
                animate(xiabu[index],{left:0})
                animate(xiabu[current],{left:tushuwid})
               }
               next=current=index
            }
  })
  }
 let tushu=document.querySelector(".tushu")
 dianka(tushu);
 let miui=document.querySelector(".miui")
 dianka(miui);
 let youxi=document.querySelector(".youxi")
 dianka(youxi);
  let yingyong=document.querySelector(".yingyong")
 dianka(yingyong);
 
 // 明星单品
 let buttonL=document.querySelector(".hhzuo")
 let buttonR=document.querySelector(".hhyou")
 let bigbox=document.querySelector(".dahehe")
 let smallbox=document.querySelector(".mingxiahe")
 let swidth=parseInt(getComputedStyle(bigbox,null).width)/3
 console.log(buttonL,buttonR,bigbox,swidth)
  let times=0;
 buttonR.onclick=function(){
      times++
      if(times==3){
        times=2
      }
  bigbox.style.transform=`translateX(${-swidth*times}px)`
 }
 buttonL.onclick=function(){
      times--
      if(times<0){
        times=0
      }
  bigbox.style.transform=`translateX(${-swidth*times}px)`
 }
}
