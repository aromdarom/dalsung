$(function(){
    /* h1태그에 텍스트 넣기  .text()메서드를 이용 */
    $('.text_Move').text('PORTFOLIO');

    
    $('.text_Move').DB_springMove({
        dir:'x',         //움직이는 방향
        mirror:2,        //움직이는 반전된 반경
        radius:10,       //움직이는 반경 지름
        motionSpeed:0.07 //속도
    })

    $('.dd1').DB_springMove({
        dir:'y',         //움직이는 방향
        mirror:1,        //움직이는 반전된 반경
        radius:10,       //움직이는 반경 지름
        motionSpeed:0.07 //속도

    })




})