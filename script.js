let d = 90;
    let ac = 0;
     function increment() {
        if(ac == 1){
            document.getElementById('demoInput').stepUp();
             let _input = document.getElementById('demoInput').value
             iii = 0
             btn(_input)
             let dis = document.querySelector('._display>span');
     
             if(d<120){
                d += 30;
             dis.innerText= d +' BPM'
             }
        }        
   }
   function decrement() {
      if(ac == 1){
        document.getElementById('demoInput').stepDown();
      let _input = document.getElementById('demoInput').value
      
      iii = 0
      btn(_input)
      let dis = document.querySelector('._display>span');
      if(d >60){
         d -= 30;
      dis.innerText= d +' BPM'
        }
      }
   }

    let pp = document.querySelector('.me')
   let iii = 0
   let v = document.getElementById('demoInput').value
function btn(c){
    if(c== null){
       vv = v 
    }else{
         vv= c
    }
   
    if(iii == 0){
          iii = 1
          let getbtn = document.querySelector('.metroOnOf')
          getbtn.classList.add('btnactive')
          ac = 1;
          pp.play()
          pp.loop = true
          pp.playbackRate = vv;  
          iii = 1
    }
    else{
        let getbtn = document.querySelector('.metroOnOf')
        pp.pause()
        getbtn.classList.remove('btnactive')
        iii = 0
    }

}


   let E3 = document.getElementById('E3')
   let G3 = document.getElementById('G3')
   let B3 = document.getElementById('B3')
   let B4 = document.getElementById('B4')
   let E5 = document.getElementById('E5')
   let G5 = document.getElementById('G5')
   let Gb5 = document.getElementById('Gb5')
   let D5 = document.getElementById('D5')
   let C5 = document.getElementById('C5')
   let A4 = document.getElementById('A4')
   let A3 = document.getElementById('A3')
   let C4 = document.getElementById('C4')
   let G4 = document.getElementById('G4')
   let Gb4 = document.getElementById('Gb4')
   let B2 = document.getElementById('B2')
   let Gb3 = document.getElementById('Gb3')
   let E4 = document.getElementById('E4')
   let ri = 0;


   function E3add(){
    let acc = document.querySelector('.a186')
      acc.classList.add('_active')
      let lic = document.querySelector('.l186')
      lic.classList.add('light')
   }
   function E3remove(){
    let acc = document.querySelector('.a186')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l186')
      lic.classList.remove('light')
   }
   function G3add(){
    let acc = document.querySelector('.a13')
      acc.classList.add('_active')
      let lic = document.querySelector('.l13')
      lic.classList.add('light')
   }
   function G3remove(){
    let acc = document.querySelector('.a13')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l13')
      lic.classList.remove('light')
   }
   function B3add(){
    let acc = document.querySelector('.a101')
      acc.classList.add('_active')
      let lic = document.querySelector('.l101')
      lic.classList.add('light')
   }
   function B3remove(){
    let acc = document.querySelector('.a101')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l101')
      lic.classList.remove('light')
   }
   function B4add(){
    let acc = document.querySelector('.a66')
      acc.classList.add('_active')
      let lic = document.querySelector('.l66')
      lic.classList.add('light')
   }
   function B4remove(){
    let acc = document.querySelector('.a66')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l66')
      lic.classList.remove('light')
   }
   function E5add(){
    let acc = document.querySelector('.a188')
      acc.classList.add('_active')
      let lic = document.querySelector('.l188')
      lic.classList.add('light')
   }
   function E5remove(){
    let acc = document.querySelector('.a188')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l188')
      lic.classList.remove('light')
   }
   function G5add(){
    let acc = document.querySelector('.a191')
      acc.classList.add('_active')
      let lic = document.querySelector('.l191')
      lic.classList.add('light')
   }
   function G5remove(){
    let acc = document.querySelector('.a191')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l191')
      lic.classList.remove('light')
   }

   function Gb5add(){
    let acc = document.querySelector('.a84')
      acc.classList.add('_active')
      let lic = document.querySelector('.l84')
      lic.classList.add('light')
   }
   function Gb5remove(){
    let acc = document.querySelector('.a84')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l84')
      lic.classList.remove('light')
   }

   function D5add(){
    let acc = document.querySelector('.a77')
      acc.classList.add('_active')
      let lic = document.querySelector('.l77')
      lic.classList.add('light')
   }

   function D5remove(){
    let acc = document.querySelector('.a77')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l77')
      lic.classList.remove('light')
   }


   function C5add(){
    let acc = document.querySelector('.a78')
      acc.classList.add('_active')
      let lic = document.querySelector('.l78')
      lic.classList.add('light')
   }

   function C5remove(){
    let acc = document.querySelector('.a78')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l78')
      lic.classList.remove('light')
   }
   
   function A4add(){
    let acc = document.querySelector('.a86')
      acc.classList.add('_active')
      let lic = document.querySelector('.l86')
      lic.classList.add('light')
   }

   function A4remove(){
    let acc = document.querySelector('.a86')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l86')
      lic.classList.remove('light')
   }


   
   function A3add(){
    let acc = document.querySelector('.a100')
      acc.classList.add('_active')
      let lic = document.querySelector('.l100')
      lic.classList.add('light')
   }
   function A3remove(){
    let acc = document.querySelector('.a100')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l100')
      lic.classList.remove('light')
   }

   
   function C4add(){
    let acc = document.querySelector('.a102')
      acc.classList.add('_active')
      let lic = document.querySelector('.l102')
      lic.classList.add('light')
   }
   function C4remove(){
    let acc = document.querySelector('.a102')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l102')
      lic.classList.remove('light')
   }

   
   function G4add(){
    let acc = document.querySelector('.a67')
      acc.classList.add('_active')
      let lic = document.querySelector('.l67')
      lic.classList.add('light')
   }
   function G4remove(){
    let acc = document.querySelector('.a67')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l67')
      lic.classList.remove('light')
   }

   
   function Gb4add(){
    let acc = document.querySelector('.a8')
      acc.classList.add('_active')
      let lic = document.querySelector('.l8')
      lic.classList.add('light')
   }
   function Gb4remove(){
    let acc = document.querySelector('.a8')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l8')
      lic.classList.remove('light')
   }

   
   function B2add(){
    let acc = document.querySelector('.a74')
      acc.classList.add('_active')
      let lic = document.querySelector('.l74')
      lic.classList.add('light')
   }
   function B2remove(){
    let acc = document.querySelector('.a74')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l74')
      lic.classList.remove('light')
   }


   
   function Gb3add(){
    let acc = document.querySelector('.a56')
      acc.classList.add('_active')
      let lic = document.querySelector('.l56')
      lic.classList.add('light')
   }
   function Gb3remove(){
    let acc = document.querySelector('.a56')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l56')
      lic.classList.remove('light')
   }


   
   function E4add(){
    let acc = document.querySelector('.a90')
      acc.classList.add('_active')
      let lic = document.querySelector('.l90')
      lic.classList.add('light')
   }
   function E4remove(){
    let acc = document.querySelector('.a90')
      acc.classList.remove('_active')
      let lic = document.querySelector('.l90')
      lic.classList.remove('light')
   }




 function note3(){
     setTimeout(f1,0)
     function f1(){ 
      E3.play();
      E3.currentTime = 0;
      E3add()
     }

     setTimeout(myTimer1,600)
     function myTimer1(){
       E3.pause()
       E3.currentTime = 0;
      E3remove()
      }
     setTimeout(f2,500)
     function f2(){ 
      G3.play();
      G3.currentTime = 0;
      G3add()
 
     }

     setTimeout(myTimer2,1100)
     function myTimer2(){
       G3.pause()
       G3.currentTime = 0;
       G3remove()
      
      }
     setTimeout(f3,1000)
     function f3(){ 
      B3.play();
      B3.currentTime = 0;
      B3add()
      
      
     }

     setTimeout(myTimer3,1600)
     function myTimer3(){
       B3.pause()
       B3.currentTime = 0;
       B3remove()
        }
    }







    function note32(){
     setTimeout(f28,0)
     function f28(){ 
      E3.play();
      E3.currentTime = 0;
      E3add()
      
     }

     setTimeout(myTimer19,600)
     function myTimer19(){
       E3.pause()
       E3.currentTime = 0;
       E3remove()
         
      }
     setTimeout(f29,500)
     function f29(){ 
      A3.play();
      A3.currentTime = 0;
      A3add()
         
     }

     setTimeout(myTimer20,1100)
     function myTimer20(){
       A3.pause()
       A3.currentTime = 0;
       A3remove()
      }
     setTimeout(f30,1000)
     function f30(){ 
      C4.play();
      C4.currentTime = 0;
      C4add()
      
     }

     setTimeout(myTimer21,1600)
     function myTimer21(){
       C4.pause()
       C4.currentTime = 0;
       C4remove()
        }
    }






    function note33(){
     setTimeout(f46,0)
     function f46(){ 
      B2.play();
      B2.currentTime = 0;
      B2add()
          
     }

     setTimeout(myTimer30,600)
     function myTimer30(){
       B2.pause()
       B2.currentTime = 0;
       B2remove()
       
      }
     setTimeout(f47,500)
     function f47(){ 
      Gb3.play();
      Gb3.currentTime = 0;
      Gb3add()
      
     }

     setTimeout(myTimer31,1100)
     function myTimer31(){
       Gb3.pause()
       Gb3.currentTime = 0;
       Gb3remove()
      }
     setTimeout(f48,1000)
     function f48(){ 
      B3.play();
      B3.currentTime = 0;
      B3add()

     }

     setTimeout(myTimer32,1600)
     function myTimer32(){
       B3.pause()
       B3.currentTime = 0;
       B3remove()
       
        }
    }







let sp = document.getElementById('stop')
let ps = document.getElementById('play')
sp.style.display = "none"
// sp.style.display = "none" ;
var sh =0;


    function btn2(){
       if(sh== 0){
        ps.style.display = "none"
        sp.style.display = "flex"
        sh=1
        note3()
        setTimeout(f4,1500)
        function f4(){
            note3()
        }
        setTimeout(f5,3000)
        function f5(){
            note3()
        }
        setTimeout(f6,4500)
        function f6(){
            note3()
        }

// 222222222222222222222222222222222222222222222222222222222222222222222

     setTimeout(f7,6100-ri)
     function f7(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
      
     }

     setTimeout(myTimer7,7700)
     function myTimer7(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
       
      }

      setTimeout(f8,6100)
        function f8(){
            note3()
        }

// 333333333333333333333333333333333333333333333333333333333333333333333333333333333333

        setTimeout(f9,7700-ri)
     function f9(){ 
      E5.play();
      E5.currentTime = 0;
      E5add()
   
     }

     setTimeout(myTimer8,9300)
     function myTimer8(){
       E5.pause()
       E5.currentTime = 0;
       E5remove() 
      }

      setTimeout(f10,7700)
        function f10(){
            note3()
        }

// 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

    setTimeout(f11,9300-ri)
     function f11(){ 
      G5.play();
      G5.currentTime = 0;
      G5add()
      
     }

     setTimeout(myTimer9,12500)
     function myTimer9(){
       G5.pause()
       G5.currentTime = 0;
       G5remove()
      
      }

      setTimeout(f12,9300)
        function f12(){
            note3()
        }
      setTimeout(f13,10900)
        function f13(){
            note3()
        }

// 55555555555555555555555555555555555555555555555555555555555555555555555555555555555555

    setTimeout(f14,12500-ri)
     function f14(){ 
      Gb5.play();
      Gb5.currentTime = 0;
      Gb5add()
     
     }

     setTimeout(myTimer10,13560)
     function myTimer10(){
       Gb5.pause()
       Gb5.currentTime = 0;
       Gb5remove()
      }

    setTimeout(f15,13560-ri)
     function f15(){ 
      E5.play();
      E5.currentTime = 0;
      E5add()
      
     }

     setTimeout(myTimer11,14100)
     function myTimer11(){
       E5.pause()
       E5.currentTime = 0;
       E5remove()
      
      }


      setTimeout(f16,12500)
        function f16(){
            note3()
        }
        
// 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666

setTimeout(f17,14100-ri)
     function f17(){ 
      D5.play();
      D5.currentTime = 0;
     D5add()
     }

     setTimeout(myTimer12,15166)
     function myTimer12(){
       D5.pause()
       D5.currentTime = 0;
       D5remove()
      }
setTimeout(f18,15166-ri)
     function f18(){ 
      C5.play();
      C5.currentTime = 0;
      C5add()
     }

     setTimeout(myTimer13,15700)
     function myTimer13(){
       C5.pause()
       C5.currentTime = 0;
       C5remove()
      }


      setTimeout(f19,14100)
        function f19(){
            note3()
        }
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

setTimeout(f20,15700-ri)
     function f20(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
     
     }

     setTimeout(myTimer14,18900)
     function myTimer14(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
      }





      setTimeout(f21,15700)
        function f21(){
            note3()
        }
      setTimeout(f22,17300)
        function f22(){
            note3()
        }

// 888888888 AB 8888888888888888888888888888888888888888888888888888888888888888888888

setTimeout(f23,18900-ri)
     function f23(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     
     }

     setTimeout(myTimer15,19966)
     function myTimer15(){
       A4.pause()
       A4.currentTime = 0;
       A4remove()
      }

setTimeout(f24,19966-ri)
     function f24(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
    
     }

     setTimeout(myTimer16,20500)
     function myTimer16(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
      }


      setTimeout(f25,18900)
        function f25(){
            note3()
        }

// 99999999999999999999 CA 9999999999999999999999999999999999999999999999999999999999999
setTimeout(f26,20500-ri)
     function f26(){ 
      C5.play();
      C5.currentTime = 0;
      C5add()
     
     }

     setTimeout(myTimer17,21566)
     function myTimer17(){
       C5.pause()
       C5.currentTime = 0;
       C5remove()
      }

setTimeout(f27,21566-ri)
     function f27(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer18,22100)
     function myTimer18(){
       A4.pause()
       A4.currentTime = 0;
       A4remove()
      }

      setTimeout(f31,20500)
        function f31(){
            note32()
        }

        
        
// 101010101010101010101010101010 C 101010101010101010101010101010101010101010101010101010101010101

setTimeout(f32,22100-ri)
     function f32(){ 
      C5.play();
      C5.currentTime = 0;
      C5add()
     
     }

     setTimeout(myTimer22,25300)
     function myTimer22(){
       C5.pause()
       C5.currentTime = 0;
       C5remove()
      }
      setTimeout(f33,22100)
        function f33(){
            note32()
        }
      setTimeout(f34,23700)
        function f34(){
            note32()
        }

// 1111111111111111111111GA11111111111111111111111111111111111111111111111111111111111111111111111111


setTimeout(f35,25300-ri)
     function f35(){ 
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer23,26366)
     function myTimer23(){
       G4.pause()
       G4.currentTime = 0;
       G4remove()
      }

setTimeout(f36,26366-ri)
     function f36(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer24,26900)
     function myTimer24(){
       A4.pause()
       A4.currentTime = 0;
       A4remove()
      }

      setTimeout(f37,25300)
        function f37(){
            note3()
        }

// 121212121212121212 BG 12121212121212121212121212121212121212121212121212121212121212121212

setTimeout(f38,26900-ri)
     function f38(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
     
     }

     setTimeout(myTimer25,27966)
     function myTimer25(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
      }

setTimeout(f39,27966-ri)
     function f39(){ 
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer26,28500)
     function myTimer26(){
       G4.pause()
       G4.currentTime = 0;
       G4remove()
      }




      setTimeout(f40,26900)
        function f40(){
            note3()
        }

// 131313131313131313 B 131313131313131313131313131313131313131313131313131313131313131313

setTimeout(f41,28500-ri)
     function f41(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer27,31700)
     function myTimer27(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
      }


      setTimeout(f42,28500)
        function f42(){
            note3()
        }
      setTimeout(f43,30100)
        function f43(){
            note3()
        }




// 14141414141414141414141414141414 Gb4 G4 141414141414141414141414141414141414141414

setTimeout(f44,31700-ri)
     function f44(){ 
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer28,32766)
     function myTimer28(){
       Gb4.pause()
       Gb4.currentTime = 0;
       Gb4remove()
      }


setTimeout(f45,32766-ri)
     function f45(){ 
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer29,33300)
     function myTimer29(){
       G4.pause()
       G4.currentTime = 0;
       G4remove()
      }

      setTimeout(f49,31700)
        function f49(){
            note33()
        }



// 15151515151515151515151515151515 A Gb 151515151515151515151515151515151515151515


setTimeout(f50,33300-ri)
     function f50(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer33,34366)
     function myTimer33(){
       A4.pause()
       A4.currentTime = 0;
       A4remove()
      }


setTimeout(f51,34366-ri)
     function f51(){ 
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer34,34900)
     function myTimer34(){
       Gb4.pause()
       Gb4.currentTime = 0;
       Gb4remove()
      }

      setTimeout(f52,33300)
        function f52(){
            note33()
        }



// 1616161616161616161616161616161616161616 GA 1616161616161616161616161616161616161616

setTimeout(f53,34900-ri)
     function f53(){ 
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer35,35966)
     function myTimer35(){
       G4.pause()
       G4.currentTime = 0;
       G4remove()
     
      }

setTimeout(f54,35966-ri)
     function f54(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer36,36500)
     function myTimer36(){
       A4.pause()
       A4.currentTime = 0;
       A4remove()
      }

      setTimeout(f55,34900)
        function f55(){
            note3()
        }


// 171717171717171717171717 BC 17171717171717171717171717171717171717171717171717


setTimeout(f56,36500-ri)
     function f56(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer37,37566)
     function myTimer37(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
      }


setTimeout(f57,37566-ri)
     function f57(){ 
      C5.play();
      C5.currentTime = 0;
      C5add()
     }

     setTimeout(myTimer38,38100)
     function myTimer38(){
       C5.pause()
       C5.currentTime = 0;
       C5remove()
      }

      setTimeout(f58,36500)
        function f58(){
            note3()
        }




// 18181818181818181818 B 181818181818181818181818181818181818181818181818181818


setTimeout(f59,38100-ri)
     function f59(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer39,41300)
     function myTimer39(){
       B4.pause()
       B4.currentTime = 0;
       B4remove()
      }



      setTimeout(f60,38100)
        function f60(){
            note3()
        }

      setTimeout(f61,39700)
        function f61(){
            note3()
        }



// 191919191919191919191919191919 A B 191919191919191919191919191919191919191919191919


setTimeout(f62,41300-ri)
     function f62(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer40,42366)
     function myTimer40(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }


setTimeout(f63,42366-ri)
     function f63(){ 
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer41,42900)
     function myTimer41(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


      setTimeout(f64,41300)
        function f64(){
            note32()
        }



// 20202020202020202020202020202020 C A 2020202020202020202020202020202020202020202020202020202020202020



setTimeout(f65,42900-ri)
     function f65(){ 
      C5.play();
      C5.currentTime = 0;
      C5add()
     }

     setTimeout(myTimer42,43966)
     function myTimer42(){
        C5.pause()
        C5.currentTime = 0;
        C5remove()
      }


setTimeout(f66,43966-ri)
     function f66(){ 
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer43,44500)
     function myTimer43(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }




      setTimeout(f67,42900)
        function f67(){
            note32()
        }




// 2121212121212121212121212121212121 C 21212121212121212121212121212121212121212121212121


setTimeout(f68,44500-ri)
     function f68(){ 
      C5.play();
      C5.currentTime = 0;
      C5add()
     }

     setTimeout(myTimer44,47700)
     function myTimer44(){
        C5.pause()
        C5.currentTime = 0;
        C5remove()
      }



      setTimeout(f69,44500)
        function f69(){
            note32()
        }

        setTimeout(f70,46100)
        function f70(){
            note32()
        }




// 222222222222222222222222222  Gb G 22222222222222222222222222222222222222222222222222222(52s)


setTimeout(f71,47700-ri)
     function f71(){ 
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer45,48766)
     function myTimer45(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()
      }


setTimeout(f72,48766-ri)
     function f72(){ 
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer46,49300)
     function myTimer46(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }

      setTimeout(f73,47700)
        function f73(){
            note33()
        }

// 232323232323232323232323232323 A G 2323232323232323232323232323232323232323232323232323232323


setTimeout(f74,49300-ri)
     function f74(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer47,50366)
     function myTimer47(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }

setTimeout(f75,50366-ri)
     function f75(){ 
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer48,50633)
     function myTimer48(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


setTimeout(f76,50633-ri)
     function f76(){ 
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer49,50900)
     function myTimer49(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()
      }



      setTimeout(f77,49300)
        function f77(){
            note33()
        }




// 24242424242424242424242424242424 E 242424242424242424242424242424242424242424242424242424242424242424242424242424


setTimeout(f78,50900-ri)
     function f78(){
      E4.play();
      E4.currentTime = 0;
      E4add()
     }

     setTimeout(myTimer50,54100)
     function myTimer50(){
        E4.pause()
        E4.currentTime = 0;
        E4remove()
      }


      setTimeout(f79,50900)
        function f79(){
            note3()
        }


        setTimeout(f80,52500-ri)
     function f80(){
      E3.play();
      E3.currentTime = 0;
      E3add()
     }

     setTimeout(myTimer51,54100)
     function myTimer51(){
        E3.pause()
        E3.currentTime = 0;
        E3remove()
      }



// 25252525252525252525252525252525 B E  25252525252525252525252525252525252525252525252525


setTimeout(f81,54100-ri)
     function f81(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer52,55166)
     function myTimer52(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f82,55166-ri)
     function f82(){
      E5.play();
      E5.currentTime = 0;
      E5add()
     }

     setTimeout(myTimer53,55700)
     function myTimer53(){
        E5.pause()
        E5.currentTime = 0;
        E5remove()
      }

      
      setTimeout(f83,54100)
        function f83(){
            note3()
        }



// 2626262626262626262626262626  B G A  262626262626262626262626262626262626262626262626

setTimeout(f84,55700-ri)
     function f84(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer54,56233)
     function myTimer54(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f85,56233-ri)
     function f85(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer55,56766)
     function myTimer55(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


setTimeout(f86,56766-ri)
     function f86(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer56,57300)
     function myTimer56(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }


      setTimeout(f87,55700)
        function f87(){
            note3()
        }



// 272727272727272727272727 B 272727272727272727272727272727272727272727272727272727272727


setTimeout(f88,57300-ri)
     function f88(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer57,60500)
     function myTimer57(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


      setTimeout(f89,57300)
        function f89(){
            note3()
        }

        setTimeout(f90,58900)
        function f90(){
            note3()
        }


// 282828282828282828282828282828 B E  28282828282828282828282828282828282828282828282828(1.02)


setTimeout(f91,60500-ri)
     function f91(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer58,61566)
     function myTimer58(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f92,61566-ri)
     function f92(){
      E5.play();
      E5.currentTime = 0;
      E5add()
     }

     setTimeout(myTimer59,62100)
     function myTimer59(){
        E5.pause()
        E5.currentTime = 0;
        E5remove()
      }


      setTimeout(f93,60500)
        function f93(){
            note3()
        }


// 29292929292929292929292929292929 B Gb G  29292929292929292929292929292929292929292929


setTimeout(f94,62100-ri)
     function f94(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer60,62633)
     function myTimer60(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }

setTimeout(f95,62633-ri)
     function f95(){
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer61,63166)
     function myTimer61(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()

      }


setTimeout(f96,63166-ri)
     function f96(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer62,63700)
     function myTimer62(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


      setTimeout(f97,62100)
        function f97(){
            note3()
        }

// 3030303030303030303030303030 A 30303030303030303030303030303030303030303030303030


setTimeout(f98,63700-ri)
     function f98(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer63,66900)
     function myTimer63(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }


      setTimeout(f99,63700)
        function f99(){
            note32()
        }

      setTimeout(f100,65300)
        function f100(){
            note32()
        }



// 3131313131313131313131313131  G A B 3131313131313131313131313131313131313131313131313131313


setTimeout(f101,66900-ri)
     function f101(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer64,67433)
     function myTimer64(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


setTimeout(f102,67433-ri)
     function f102(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer65,67966)
     function myTimer65(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }
setTimeout(f103,67966-ri)
     function f103(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer66,68496)
     function myTimer66(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


      setTimeout(f104,66900)
        function f104(){
            note3()
        }


// 323232323232323232323232323232323232 B A G 32323232323232323232323232323232323232


setTimeout(f105,68500-ri)
     function f105(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer67,69033)
     function myTimer67(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }

setTimeout(f106,69033-ri)
     function f106(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer68,69566)
     function myTimer68(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }

setTimeout(f107,69566-ri)
     function f107(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer69,70100)
     function myTimer69(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }



      setTimeout(f108,68500)
        function f108(){
            note3()
        }


// 333333333333333333333333333333333333 A G Gb 3333333333333333333333333333333333333333333333

setTimeout(f109,70100-ri)
     function f109(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer70,70633)
     function myTimer70(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }

setTimeout(f110,70633-ri)
     function f110(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer71,71166)
     function myTimer71(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


setTimeout(f111,71166-ri)
     function f111(){
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer72,71700)
     function myTimer72(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()
      }


      setTimeout(f112,70100)
        function f112(){
            note33()
        }


// 343434343434343434343434343434343434 B C 343434343434343434343434343434343434343434343434




setTimeout(f113,71700-ri)
     function f113(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer73,72766)
     function myTimer73(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f114,72766-ri)
     function f114(){
      C5.play();
      C5.currentTime = 0;
      C5add()
     }

     setTimeout(myTimer74,73300)
     function myTimer74(){
        C5.pause()
        C5.currentTime = 0;
        C5remove()
      }





      setTimeout(f115,71700)
        function f115(){
            note3()
        }

// 353535353535353535353535353535353535 B 353535353535353535353535353535353535353535353535353535353535353535(1.11)




setTimeout(f116,73300-ri)
     function f116(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer75,76500)
     function myTimer75(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }





      setTimeout(f117,73300)
        function f117(){
            note3()
        }

      setTimeout(f118,74900)
        function f118(){
            note3()
        }


// 36363636363636363636363636363636 B E 363636363636363636363636363636363636363636363636

setTimeout(f119,76500-ri)
     function f119(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer76,77566)
     function myTimer76(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f120,77566-ri)
     function f120(){
      E5.play();
      E5.currentTime = 0;
      E5add()
     }

     setTimeout(myTimer77,78100)
     function myTimer77(){
        E5.pause()
        E5.currentTime = 0;
        E5remove()
      }





      setTimeout(f121,76500)
        function f121(){
            note3()
        }


// 373737373737373737373737373737373737 B G A 373737373737373737373737373737373737373737373737373737373737373737373737



setTimeout(f122,78100-ri)
     function f122(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer78,78633)
     function myTimer78(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f123,78633-ri)
     function f123(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer79,79166)
     function myTimer79(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


setTimeout(f124,79166-ri)
     function f124(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer80,79700)
     function myTimer80(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }




      setTimeout(f125,78100)
        function f125(){
            note3()
        }


// 38383838383838383838383838 B 3838383838383838383838383838383838383838383838

setTimeout(f126,79700-ri)
     function f126(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer81,82900)
     function myTimer81(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }




      setTimeout(f127,79700)
        function f127(){
            note3()
        }

        setTimeout(f128,81300)
        function f128(){
            note3()
        }


// 3939393939393939393939393939393939 B E 39393939393939393939393939393939393939393939393939393939



setTimeout(f129,82900-ri)
     function f129(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer83,83966)
     function myTimer83(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f130,83966-ri)
     function f130(){
      E5.play();
      E5.currentTime = 0;
      E5add()
     }

     setTimeout(myTimer84,84500)
     function myTimer84(){
        E5.pause()
        E5.currentTime = 0;
        E5remove()
      }





      setTimeout(f131,82900)
        function f131(){
            note3()
        }

// 404040404040404040404040404040404040 B Gb G 40404040404040404040404040404040404040404040404040404040404040404040404040


setTimeout(f132,84500-ri)
     function f132(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer85,85033)
     function myTimer85(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }

setTimeout(f133,85033-ri)
     function f133(){
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer86,85566)
     function myTimer86(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()
      }


setTimeout(f134,85566-ri)
     function f134(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer87,86100)
     function myTimer87(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


      setTimeout(f135,84500)
        function f135(){
            note3()
        }





// 41414141414141414141414141414141414141 A 41414141414141414141414141414141414141414141414141414141414141


setTimeout(f136,86100-ri)
     function f136(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer88,89300)
     function myTimer88(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }

      



      setTimeout(f137,86100)
        function f137(){
            note32()
        }

      setTimeout(f138,87700)
        function f138(){
            note32()
        }

// 4242424242424242424242424242424242424242 G A B 4242424242424242424242424242424242424242424242424242424242424242


setTimeout(f139,89300-ri)
     function f139(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer89,89833)
     function myTimer89(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
     
      }

setTimeout(f140,89833-ri)
     function f140(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer90,90366)
     function myTimer90(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }

setTimeout(f141,90366-ri)
     function f141(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer91,90900)
     function myTimer91(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }



      setTimeout(f142,89300)
        function f142(){
            note3()
        }


// 43434343434343434343434343434343 B A G 4343434343434343434343434343434343434343434343

setTimeout(f143,90900-ri)
     function f143(){
      B4.play();
      B4.currentTime = 0;
      B4add()
     }

     setTimeout(myTimer92,91433)
     function myTimer92(){
        B4.pause()
        B4.currentTime = 0;
        B4remove()
      }


setTimeout(f144,91433-ri)
     function f144(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer93,91966)
     function myTimer93(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }


setTimeout(f145,91966-ri)
     function f145(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer94,92500)
     function myTimer94(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }



      setTimeout(f146,90900)
        function f146(){
            note3()
        }


// 4444444444444444444444444444444444444 A G Gb 4444444444444444444444444444444444444444444444444444



setTimeout(f147,92500-ri)
     function f147(){
      A4.play();
      A4.currentTime = 0;
      A4add()
     }

     setTimeout(myTimer95,93033)
     function myTimer95(){
        A4.pause()
        A4.currentTime = 0;
        A4remove()
      }


setTimeout(f148,93033-ri)
     function f148(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer96,93566)
     function myTimer96(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }


setTimeout(f149,93566-ri)
     function f149(){
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer97,94100)
     function myTimer97(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()
      }





      setTimeout(f150,92500)
        function f150(){
            note33()
        }



// 45454545454545454545454545454545454545454545 E G Gb 4545454545454545454545454545454545454545454545454545



setTimeout(f151,94100-ri)
     function f151(){
      E4.play();
      E4.currentTime = 0;
      E4add()
     }

     setTimeout(myTimer98,95166)
     function myTimer98(){
        E4.pause()
        E4.currentTime = 0;
        E4remove()
      }

setTimeout(f152,95166-ri)
     function f152(){
      G4.play();
      G4.currentTime = 0;
      G4add()
     }

     setTimeout(myTimer99,95432)
     function myTimer99(){
        G4.pause()
        G4.currentTime = 0;
        G4remove()
      }

setTimeout(f153,95432-ri)
     function f153(){
      Gb4.play();
      Gb4.currentTime = 0;
      Gb4add()
     }

     setTimeout(myTimer100,95700)
     function myTimer100(){
        Gb4.pause()
        Gb4.currentTime = 0;
        Gb4remove()
      }




      setTimeout(f154,94100)
        function f154(){
            note3()
        }


// 46464646464646464646464646464646 E 4646464646464646464646464646464646464646464646


setTimeout(f155,95700-ri)
     function f155(){
      E4.play();
      E4.currentTime = 0;
      E4add()
     }

     setTimeout(myTimer101,97300)
     function myTimer101(){
        E4.pause()
        E4.currentTime = 0;
        E4remove()
      }




      setTimeout(f156,95700)
        function f156(){
            note3()
        }

        setTimeout(f158,97300-ri)
     function f158(){
      E4.play();
      E4.currentTime = 0;
      E4add()
     }

     setTimeout(myTimer102,98900)
     function myTimer102(){
        E4.pause()
        E4.currentTime = 0;
        E4remove()
      }


        setTimeout(f157,97300-ri)
     function f157(){
      E3.play();
      E3.currentTime = 0;
      E3add()
     }

     setTimeout(myTimer103,98900)
     function myTimer103(){
        E3.pause()
        E3.currentTime = 0;
        E3remove()
      }
       }else{
        sh = 0;
        location.reload();
        // let _song = [E3 , G3 , B3 , B4 , E5 , G5 , Gb5 , D5 , C5 , A4 , A3 , C4 , G4 , Gb4 , B2 , Gb3 , E4] 
        // for( i = 0 ; i<=17 ; i++){
        //   _song[i].pause()
      
        // }
     
        // E3.pause()
        // G3.pause()
        // B3.pause()
        // B4.pause()
        // E5.pause()
        // G5.pause()
        // Gb5.pause()
        // D5.pause()
        // C5.pause()
        // A4.pause()
        // A3.pause()
        // C4.pause()
        // G4.pause()
        // Gb4.pause()
        // B2.pause()
        // Gb3.pause()
        // E4.pause()
       
           }

    }

  
         document.addEventListener('keydown',function(e){
                    if(e.repeat){
                        return;
                    }
                 let x = e.keyCode 
                let p = document.querySelector('.e' + x);
                 p.play();
                 p.currentTime = 0
                let _a = document.querySelector('.a'+ x)
               
                 _a.classList.add('_active')   
                 let _l = document.querySelector('.l'+ x)
       
                 _l.classList.add('light')   

                
         })
         document.addEventListener('keyup',function(e){
         
                 let x = e.keyCode 
                 let p = document.querySelector('.e' + x);
                 setTimeout(myTimer, 500)
                 function myTimer(){
                    p.pause()
                 }
                 
                let _a = document.querySelector('.a'+ x)
                 _a.classList.remove('_active')
                 let _l = document.querySelector('.l'+ x)
                 _l.classList.remove('light')
                }
                 
         )

 
   


    let keys = document.querySelectorAll('.pk')

    keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

    function playNote(key){
        let noteAudio = document.getElementById(key.dataset.note)
        noteAudio.play()  
        noteAudio.currentTime = 0
    }
    


    let _svg = `<g>
                    <path id="Vector" opacity="0.6" d="M23.3 457.707H17.36L24.29 412.656H30.22L23.3 457.707Z" fill="url(#paint0_linear_12_336)"/>
                    <path id="Vector_2" d="M65.4399 0.300049H1.17004V457.503H65.4399V0.300049Z" fill="url(#paint1_linear_12_336)"/>
                    <path id="Vector_3" d="M51.23 409.108H14.4L0.680054 457.513H32.8101H64.95L51.23 409.108Z" fill="url(#paint2_linear_12_336)"/>
                    <path id="Vector_4" opacity="0.4" d="M9.08997 0.309814V402.884C9.08997 402.884 8.09004 423.359 1.17004 455.768L14.4 409.108V0.309814H9.08997Z" fill="url(#paint3_linear_12_336)"/>
                    <path id="Vector_5" opacity="0.22" d="M56.91 0.309814V402.884C56.91 402.884 57.9099 423.359 64.8199 455.768L51.6 409.108V0.309814H56.91Z" fill="url(#paint4_linear_12_336)"/>
                    <path id="Vector_6" d="M13 0.300049H52.55V405.987C52.55 406.94 52.1591 407.855 51.4634 408.53C50.7676 409.204 49.8239 409.583 48.84 409.583H16.71C15.726 409.583 14.7824 409.204 14.0867 408.53C13.3909 407.855 13 406.94 13 405.987V0.300049Z" fill="url(#paint5_linear_12_336)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_12_336" x1="23.79" y1="413.131" x2="23.79" y2="457.833" gradientUnits="userSpaceOnUse">
                    <stop/>
                    <stop offset="1"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_12_336" x1="1.17004" y1="228.906" x2="65.4399" y2="228.906" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#858585"/>
                    <stop offset="1" stop-color="#3C3C3C"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_12_336" x1="32.81" y1="409.108" x2="32.81" y2="457.571" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3A3A3A"/>
                    <stop offset="0.49" stop-color="#4E4E4E"/>
                    <stop offset="0.82" stop-color="#5F5F5F"/>
                    <stop offset="0.85" stop-color="#555555"/>
                    <stop offset="0.91" stop-color="#393939"/>
                    <stop offset="0.98" stop-color="#0C0C0C"/>
                    <stop offset="1"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_12_336" x1="1.17004" y1="228.044" x2="14.4" y2="228.044" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_12_336" x1="64.8299" y1="228.044" x2="51.6" y2="228.044" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_12_336" x1="32.81" y1="0.300049" x2="32.81" y2="410.078" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#282828"/>
                    <stop offset="1"/>
                    </linearGradient>
                    </defs>`        
                            
    let g1 =document.getElementsByClassName('Group1')

    for(i=0;i<=24;i++){
      g1[i].innerHTML =  _svg  
    }