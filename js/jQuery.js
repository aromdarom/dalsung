
  //팝업창
  //쿠키설정    
  function setCookie( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    }

    //쿠키 불러오기
    function getCookie(name) 
    { 
        var obj = name + "="; 
        var x = 0; 
        while ( x <= document.cookie.length ) 
        { 
            var y = (x+obj.length); 
            if ( document.cookie.substring( x, y ) == obj ) 
            { 
                if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
                    endOfCookie = document.cookie.length;
                return unescape( document.cookie.substring( y, endOfCookie ) ); 
            } 
            x = document.cookie.indexOf( " ", x ) + 1; 
            
            if ( x == 0 ) break; 
        } 
        return ""; 
    }

    //닫기 버튼 클릭시
    function closeWin(key)
    {
        if($("#todaycloseyn").prop("checked"))
        {
            setCookie('divpop'+key, 'Y' , 1 );
        }
        $("#divpop"+key+"").hide();
    }
  
    $(function(){    
        if(getCookie("divpop1") !="Y"){
            $("#divpop1").show();
        }
    });










$(function(){

  

	$("nav > ul > li").on("mouseenter focusin", function(){ 

		$(this).find(".sub").stop().slideDown();
	});
	$("nav > ul > li").on("mouseleave focusout", function(){

		$(this).find(".sub").stop().slideUp();
	});
	

});




$(function(){
  $('.type').typed({
    strings:['군민이 빛나는 ' + '<span class=typed-cursor>' + '달성군 보건소' + '</span>'],
    typeSpeed:150,
    backDelay:200,
    loop:true,
    showCursor: false
  });
});





$(function(){

  $(".tabArea .tab li a").on("click", function(){
		// 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
		const num = $(".tabArea .tab li a").index($(this));
		// 기존에 적용되어 있는 on class 삭제
		$(".tabArea .tab li").removeClass("on");
		$(".tabArea .tabBox").removeClass("on");
	
		// 다음 요소 클릭시 on class 추가
		$('.tabArea .tab li:eq(' + num + ')').addClass("on");
		$('.tabArea .tabBox:eq(' + num + ')').addClass("on");
	
	});


});

$(function(){
    // 슬라이크 전체 크기(width 구하기)
    const slide = document.querySelector(".slide");
    let slideWidth = slide.clientWidth;

    // 버튼 엘리먼트 선택하기
    const prevBtn = document.querySelector(".slide_prev_button");
    const nextBtn = document.querySelector(".slide_next_button");
    
    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    let slideItems = document.querySelectorAll(".slide_item");
    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    const maxSlide = slideItems.length;
    
    // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
    let currSlide = 1;
    
    // 페이지네이션 생성
    const pagination = document.querySelector(".slide_pagination");
    
    for (let i = 0; i < maxSlide; i++) {
      if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
      else pagination.innerHTML += `<li>•</li>`;
    }
    
    const paginationItems = document.querySelectorAll(".slide_pagination > li");
    
    // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
    const startSlide = slideItems[0];
    const endSlide = slideItems[slideItems.length - 1];
    const startElem = document.createElement("div");
    const endElem = document.createElement("div");
    
    endSlide.classList.forEach((c) => endElem.classList.add(c));
    endElem.innerHTML = endSlide.innerHTML;
    
    startSlide.classList.forEach((c) => startElem.classList.add(c));
    startElem.innerHTML = startSlide.innerHTML;
    
    // 각 복제한 엘리먼트 추가하기
    slideItems[0].before(endElem);
    slideItems[slideItems.length - 1].after(startElem);
    
    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    slideItems = document.querySelectorAll(".slide_item");
    //
    let offset = slideWidth + currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
  });

  function nextMove() {
    currSlide++;
    // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if (currSlide <= maxSlide) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = 0;
      let offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide++;
      offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
      // // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    }
  }
  function prevMove() {
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = maxSlide + 1;
      let offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide--;
      offset = slideWidth * currSlide;
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    }
  }

  // 버튼 엘리먼트에 클릭 이벤트 추가하기
  nextBtn.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    nextMove();
  });
  // 버튼 엘리먼트에 클릭 이벤트 추가하기
  prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    prevMove();
  });

  // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
  window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
  });

  // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
  for (let i = 0; i < maxSlide; i++) {
    // 각 페이지네이션마다 클릭 이벤트 추가하기
    paginationItems[i].addEventListener("click", () => {
      // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
      currSlide = i + 1;
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    });
  }

  // 드래그(스와이프) 이벤트를 위한 변수 초기화
  let startPoint = 0;
  let endPoint = 0;

  // PC 클릭 이벤트 (드래그)
  slide.addEventListener("mousedown", (e) => {
    startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
  });

  slide.addEventListener("mouseup", (e) => {
    endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint < endPoint) {
      // 마우스가 오른쪽으로 드래그 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 마우스가 왼쪽으로 드래그 된 경우
      nextMove();
    }
  });

  // 모바일 터치 이벤트 (스와이프)
  slide.addEventListener("touchstart", (e) => {
    startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
  });
  slide.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
    if (startPoint < endPoint) {
      // 오른쪽으로 스와이프 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 왼쪽으로 스와이프 된 경우
      nextMove();
    }
  });

  // 기본적으로 슬라이드 루프 시작하기
  let loopInterval = setInterval(() => {
    nextMove();
  }, 3000);

  // 슬라이드에 마우스가 올라간 경우 루프 멈추기
  slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
  });

  // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
  slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove();
    }, 3000);
  });
});



$(function(){
  $('#footer_select > #fSelect > li').mouseenter(function(){
      $(this).find('ul').slideDown()
  });

  $('#footer_select > #fSelect > li').click(function(){
      $(this).find('ul').slideUp()
  });

});


$(function(){
  
    let topBtn = document.querySelector(".upbutton");

    // On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
    // 클릭 시 페이지의 상단으로 스크롤. 부드럽게 이동하는 것을 원치 않을 경우 'smooth'를 'instant'로 바꾸도록 합니다.
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // On scroll, Show/Hide the btn with animation
    // 스크롤 시 애니메이션과 함께 버튼 표시/숨기기
    window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0

});

