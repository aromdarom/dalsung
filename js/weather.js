$(function(){

    //날씨 정보를 요청받는 url
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=37.2992437&lon=126.9782357&appid=931cf418021445795381368f79037456&units=Metric', function(data){
    
        var $city = data.name; //도시이름
        var $minTemp = data.main.temp_min; /* 최저온도 */
        var $maxTemp = data.main.temp_max; /* 최고온도 */
        var $cTemp = data.main.temp; /* 현재온도 */
    
        var now = new Date(Date.now());
        var b = now.getDay();
        switch(b){
            case 0 : c = "일"
            break
    
            case 1:
                c = "월"
                break
    
            case 2:
                c = "화"
                break
    
            case 3:
                c = "수"
                break
    
            case 4:
                c = "목"
                break
    
            case 5:
                c = "금"
                break
    
            case 6:
                c = "토"
                break
        }
    
        /* 날씨아이콘 데이터 : OpenWeatherMap 오픈 API */
        /*  현재의 날씨 정보가 필요하기 때문에 Current weather data('https://openweathermap.org/current') API를 사용 */
        /* 날씨를 불러오는 방법은 지역이름, 지역ID,위도,경도과 같은 위치 정보등... */
        /* 앞의 코드 2자리 숫자로 날씨를 구분하고 영어 소문자 'n'과 'd'로 낮과 밤을 구분. */
        /* 폰트어썸 이미지이용하여 각 아이콘 코드의 숫자에 따라 폰트어썸에서 제공한 각 날씨의 아이콘 스크립트를 저장한 객체 weatherIcon을 생성. */
        /* 아이콘 코드의 앞 두자리 숫자만 필요하므로 .substr(0, 2)을 이용하여 변수 $Icon에 저장 */
        /* 원래의 아이콘 출력 url대신 '<i class="' + weatherIcon[$Icon] + '"></i>'에 출력 */
    
        let weatherIcon = { //스코프범위를 가지는 지역 변수
            '01': 'wi wi-day-sunny',
            '02': 'wi wi-day-cloudy',
            '03': 'wi wi-cloud',
            '04': 'wi wi-cloudy',
            '09': 'wi wi-day-rain-mix',
            '10': 'wi wi-showers',
            '11': 'wi wi-thunderstorm',
            '13': 'wi wi-snowflake-cold',
            '50': 'wi wi-smog'
    
        }
    
        var month = now.getMonth() +1;
        var $cDate = now.getFullYear() + '년 ' + month + '월 ' + now.getDate() + '일 ' + c + '요일 ' + now.getHours() + '시 ' + now.getMinutes() + '분 ';
    
        var $wIcon = (data.weather[0].icon).substr(0,2);
    
        $('.clowtemp').append($minTemp + '℃');
        $('.chightemp').append($maxTemp + '℃');
        $('.ctemp').append($cTemp + '℃');
        $('.cicon').append('<i class="' +weatherIcon[$wIcon] + '"></i>');
    
    
        $('.date').prepend($cDate);
        $('.cname').append($city);
    
    })
    
    
    
    
    
    
    
    })