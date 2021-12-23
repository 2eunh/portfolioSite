
//nav
function wNav(){
      //기본 네비
        $('nav>ul>li>a').on('click',function(){
          let num = $(this).attr('href');
          // console.log(num);
          let numPos = $(num).offset().top;
          // console.log(numPos);
          let headeH = $('#headerWrap').height();
          let secH = parseInt($('div#wrap>div>article').css('padding-top'));
          $('body, html').animate({scrollTop:numPos-(headeH-secH)},1000,'swing')

          //
          return false;
        });
        
        //mobile nav
       
}
//mobile nav
function mNav(){
    //
    $('#btn').on('click',function(e){
        $('nav').css('display', 'block');
    });
    //
    $('close').on('click',function(e){
        $('nav').css('display','none');
    });
    //
    $('nav>ul>li>a').on('click',function(){
        let num = $(this).attr('href');
        // console.log(num);
        let numPos = $(num).offset().top;
        // console.log(numPos);
        let headeH = $('#headerWrap').height();
        let secH = parseInt($('div#wrap>div>article').css('padding-top'));
        $('nav').css('display','none');
        $('body, html').animate({scrollTop:numPos-(headeH-secH)},1000,'swing')

        //
        return false;
      });
}

//gallery
function mGallery(){
    //변수
    let divWidth = $('#box03>article>div').width();
    console.log(divWidth);
    //준비
    $('#box03>article>div>ul>li:last').prependTo('#box03>article>div>ul');
    $('#box03>article>div>ul').css('margin-left','-'+divWidth+'px');
    //animate
    $('#box03>article>.prev').on('click',function(e){
        $('#box03>article>div>ul').animate({marginLeft:'-='+divWidth+'px'},1000,'swing',
        function(){
            $('#box03>article>div>ul>li:first').appendTo('#box03>article>div>ul');
            $('#box03>article>div>ul').css('margin-left','-'+divWidth+'px');
        });
    });
    $('#box03>article>.next').on('click',function(e){
        $('#box03>article>div>ul').animate({marginLeft:'+='+divWidth+'px'},1000,'swing',
        function(){
            $('#box03>article>div>ul>li:last').prependTo('#box03>article>div>ul');
            $('#box03>article>div>ul').css('margin-left','-'+divWidth+'px');
        });
    });
};

//form
function formValue(){
    $('#box04 form li>input, #box04 form li>textarea').removeAttr('placeholder');
    $('#box04 form li>input, #box04 form li>textarea').on('focus',function(e){
        $(this).prev('label').fadeOut(300);
    });
    $('#box04 form li>input, #box04 form li>textarea').on('blur',function(e){
        let num = $(this).val();
        if(num == ''){
            $(this).prev('label').fadeIn(300);
        }
    });

};