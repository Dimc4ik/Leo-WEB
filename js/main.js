var clickLink = document.getElementsByClassName("example-item-btn");
var sb = document.querySelector(".sb-1");

clickLink[i].addEventListener('click', function(){
    sb.classList.add('add-border-btn');
})
//
//for(i=0, len= clickLink.length; i < len; i++){
//    clickLink[i].addEventListener("click", function (){
//        this.classList.add('add-border-btn');
//        if(!(this.classList.contains("add-border-btn"))){
//            for(i=0, len = clickLink.length; i < len; i++){
//                click[i].classList.add('del-border-btn');
//            }
////            clickLink.classList.add('del-border-btn');
//        }
//    };
//                                 )
//    
//}