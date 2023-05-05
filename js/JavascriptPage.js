$(document).ready(function () {
  function createShowElement(
    showInfo,
    showDate, 
    showTime, 
    showtimeZone, 
    showLocation, 
    showVenue
    ) {
              
    const calendar = "https://maucon23.github.io/BABYMETAL_Dates/svg/Calendar.svg";
    const mapPin = "https://maucon23.github.io/BABYMETAL_Dates/svg/MapPin.svg";
    const stadium = "https://maucon23.github.io/BABYMETAL_Dates/svg/StadiumSVG.svg";
    const chain = "https://maucon23.github.io/BABYMETAL_Dates/svg/Chain.svg";
    const { headerName, imageLink, officialText, officialLink } = formatInfos();
    const randomid = formatLocation(showLocation) + generateRandomPattern();
    const randomcountid = formatLocation(showLocation) + generateRandomPattern();
    const longDate = formatDateList(showDate);
    const countdownDate = new Date(formatDate(showDate) + "T" + showTime);
    const countdowns = [{
      timeZone: showtimeZone,
      countdownDate: countdownDate,
      elementId: "countdown-" + randomcountid,
      hideIds: [randomid],
      intervalId: null,
    }];
        
    // Create the HTML elements
    const showdates = document.createElement("div");
    showdates.id = randomid;
    showdates.classList.add("showdates");
  
    const showheader = document.createElement("div");
    showheader.classList.add("showheader");
    //showheader.classList.add("invisible");
    
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = `<span>${headerName}</span>`;
  
    const newline1 = document.createElement("div");
    newline1.classList.add("newline");
   
    const showimage = document.createElement("div");
    showimage.classList.add("showimage");
    showimage.innerHTML = `
        <img src="${imageLink}"/>
    `;

    const countcenter = document.createElement("div");
    countcenter.classList.add("countcenter");
    
    const element = document.createElement("div");
    element.id = "countdown-" + randomcountid;
  
    const newline2 = document.createElement("div");
    newline2.classList.add("newline");

    const showinfos = document.createElement("div");
    showinfos.classList.add("showinfos");

    const textinfo = document.createElement("div");
    textinfo.classList.add("textinfos");
  
    const titlelist = document.createElement("div");
    titlelist.classList.add("titlelist");
    //titlelist.classList.add("invisible");
    titlelist.innerHTML = `<span>${headerName}</span>`;
  
    const imageSpace = document.createElement("div");
    imageSpace.classList.add("imageSpace");
    
    const dateshow = document.createElement("div");
    dateshow.classList.add("dateshow");
    dateshow.innerHTML = `
        <img src="${calendar}" class="svgstyle"/>
        <span>${showDate}</span>
    `;

    const dateList = document.createElement("div");
    dateList.classList.add("dateList");
    //dateList.classList.add("invisible");
    dateList.innerHTML = `
      <img src="${calendar}" width="24px" class="svgstyle"/>
      <span>${longDate}</span>
    `;
  
    const location = document.createElement("div");
    location.classList.add("location");
    location.innerHTML = `
        <img src="${mapPin}" class="svgstyle">
        <span>${showLocation}</span>
    `;
   
    const venue = document.createElement("div");
    venue.classList.add("venue");
    venue.innerHTML = `
        <img src="${stadium}" class="svgstyle"/>
        <span>${showVenue}</span>
    `;
    
    const officiallink = document.createElement("div");
    officiallink.classList.add("officiallink");
    officiallink.innerHTML = `
        <img src="${chain}">
        <a href="${officialLink}">${officialText}</a>
    `;
    
    // Add the HTML elements to the showdates container
    showdates.appendChild(showheader);
    //showheader.appendChild(title);
    //showheader.appendChild(showimage);
    showheader.appendChild(showimage);
    //showdates.appendChild(showinfos);
    showdates.appendChild(textinfo);//
    textinfo.appendChild(showinfos);
    showdates.appendChild(officiallink);
    //showinfos.appendChild(imageSpace);//down
    showinfos.appendChild(titlelist);
    showinfos.appendChild(dateshow);
    showinfos.appendChild(dateList);
    showinfos.appendChild(location);
    showinfos.appendChild(venue);
    //showdates.appendChild(officiallink);

    showimage.appendChild(countcenter);
    countcenter.appendChild(element);
      
    countdowns.forEach((countdown) => {      
      const intervalId = setInterval(() => {
        const now = new Date().toLocaleString('en-US', { timeZone: countdown.timeZone });
        const distance = countdown.countdownDate.getTime() - new Date(now).getTime();
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        if (distance < 0) {
          clearInterval(intervalId);
          element.style.display = "none";
          countdown.hideIds.forEach(id => {
            const otherElement = document.getElementById(id);
            if (otherElement) {
              otherElement.style.display = "none";
            }
          });
        } else {
          element.innerHTML = formatTime(days) + "d " + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        }
      }, 1000);
    });
      
  function formatTime(time) {
      return (time < 10 ? "0" : "") + time;
  }
    
  return showdates;

  function formatInfos() {
    const showName = showInfo;
    
    let headerName = 'Tour/Show Name';
    if (showName === 'Sabaton Tour') {
      headerName = 'Tour To End All Tours (Special Guest)';
    } else if (showName === 'Babymetal Tour') {
      headerName = 'Babymetal World Tour 2023';
    } else if (showName === 'Summer Sonic 2023 (Osaka)') {
      headerName = 'Summer Sonic 2023';
    } else if (showName === 'Summer Sonic 2023 (Tokyo)') {
      headerName = 'Summer Sonic 2023';
    } else if (showName === 'Blue Ridge Rock Festival') {
      headerName = 'Blue Ridge Rock Festival';
    } else if (showName === 'Louder Than Life') {
      headerName = 'Louder Than Life';
    } else if (showName === 'Aftershock Fest') {
      headerName = 'Aftershock Fest';
    }
    
    let imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/tag/BMLogoScratch.png';
    if (showName === 'Sabaton Tour') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/TourToEndAllTours2_600x440.png';
    } else if (showName === 'Babymetal Tour') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/WorldTourAsia&AU_600x440.png';
    } else if (showName === 'Summer Sonic 2023 (Osaka)') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/SummerSonicOsaka_600x440.png';
    } else if (showName === 'Summer Sonic 2023 (Tokyo)') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/SummerSonicTokyo_600x440.png';
    } else if (showName === 'Blue Ridge Rock Festival') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/BlueRidge_600x440.png';
    } else if (showName === 'Louder Than Life') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/LouderThanLife_600x440.png';
    } else if (showName === 'Aftershock Fest') {
      imageLink = 'https://maucon23.github.io/BABYMETAL_Dates/Media/Aftershock_600x440.png';
    }
    
    let officialText = 'Official Link';
    if (showName === 'Sabaton Tour') {
      officialText = 'Sabaton Official';
    } else if (showName === 'Babymetal Tour') {
      officialText = 'Babymetal Official';
    } else if (showName === 'Summer Sonic 2023 (Osaka)') {
      officialText = 'Summer Sonic Official';
    } else if (showName === 'Summer Sonic 2023 (Tokyo)') {
      officialText = 'Summer Sonic Official';
    } else if (showName === 'Blue Ridge Rock Festival') {
      officialText = 'Blue Ridge Official';
    } else if (showName === 'Louder Than Life') {
      officialText = 'Louder Than Life Official';
    } else if (showName === 'Aftershock Fest') {
      officialText = 'Aftershock Official';
    }
    
    let officialLink = '#';
    if (showName === 'Sabaton Tour') {
      officialLink = 'https://www.sabaton.net/tour/';
    } else if (showName === 'Babymetal Tour') {
      officialLink = 'https://babymetal.com/mob/news/diarKiji.php?site=TO&ima=3057&cd=TOUR_TO&so=a';
    } else if (showName === 'Summer Sonic 2023 (Osaka)') {
      officialLink = 'https://www.summersonic.com/en/tickets/osaka/';
    } else if (showName === 'Summer Sonic 2023 (Tokyo)') {
      officialLink = 'https://www.summersonic.com/en/tickets/tokyo/';
    } else if (showName === 'Blue Ridge Rock Festival') {
      officialLink = 'https://blueridgerockfest.com';
    } else if (showName === 'Louder Than Life') {
      officialLink = 'https://louderthanlifefestival.com';
    } else if (showName === 'Aftershock Fest') {
      officialLink = 'https://aftershockfestival.com';
    }
    
    return { headerName, imageLink, officialText, officialLink };
  }
    
  function formatDateList(showDate) {
    const dateParts = showDate.split("/");
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const year = dateParts[2];
    
    let daySuffix = 'th';
    if (day === 01 || day === 21 || day === 31) {
      daySuffix = 'st';
    } else if (day === 2 || day === 22) {
      daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
      daySuffix = 'rd';
    }

    let monthName = 'Month';
    if (month === 01) {
      monthName = 'January';
    } else if (month === 02) {
      monthName = 'February';
    } else if (month === 03) {
      monthName = 'March';
    } else if (month === 04) {
      monthName = 'April';
    } else if (month === 05) {
      monthName = 'May';
    } else if (month === 06) {
      monthName = 'June';
    } else if (month === 07) {
      monthName = 'July';
    } else if (month === 08) {
      monthName = 'August';
    } else if (month === 09) {
      monthName = 'September';
    } else if (month === 10) {
      monthName = 'October';
    } else if (month === 11) {
      monthName = 'November';
    } else if (month === 12) {
      monthName = 'December';
    }
    
    return `${day}${daySuffix} ${monthName} ${year}`;
  }
    
  function generateRandomPattern() {
    const chars = headerName + showDate + showTime + showLocation + showVenue;
    let pattern = '';
    for (let i = 0; i < 5; i++) {
      pattern += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pattern;
  }
     
  function formatLocation(showLocation) {
    const localParts = showLocation.split(",");
    return localParts[0];
  }
     
  function formatDate(showDate) {
    const dateParts = showDate.split("/");
    return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  }
}
      
// Example usage
const shows = [
    createShowElement(
    'Sabaton Tour',
    '28/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Stockholm, Sweden', 
    'Avicii Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '29/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Oslo, Norway', 
    'Oslo Spektrum'
    ),

    createShowElement(
    'Sabaton Tour', 
    '30/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Copenhagen, Denmark', 
    'Royal Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '02/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Hannover, Germany', 
    'ZAG Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '03/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Amsterdam, The Netherlands', 
    'Ziggo Dome'
    ),

    createShowElement(
    'Sabaton Tour', 
    '05/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Berlin, Germany', 
    'Mercedes Benz Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '06/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Leipzig, Germany', 
    'Quarterback Immobilien Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '07/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Vienna, Austria', 
    'Wiener Stadthalle'
    ),

    createShowElement(
    'Sabaton Tour', 
    '09/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Lodz, Poland', 
    'Atlas Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '10/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Ostrava, Czech Republic', 
    'Arena Ostrava'
    ),

    createShowElement(
    'Sabaton Tour', 
    '12/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Cologne, Germany', 
    'Lanxess Arena'
    ),

    createShowElement(
    'Sabaton Tour', 
    '13/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Antwerp, Belgium', 
    'Sportpaleis'
    ),

    createShowElement(
    'Sabaton Tour', 
    '15/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Munich, Germany', 
    'Olympiahalle'
    ),

    createShowElement(
    'Sabaton Tour', 
    '18/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Tallinn, Estonia', 
    'Saku Suurhall'
    ),

    createShowElement(
    'Sabaton Tour', 
    '19/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Helsinki, Finland', 
    'Helsinki Ice Hall'
    ),

    createShowElement(
    'Sabaton Tour', 
    '20/05/2023', 
    '18:00:00', 
    'Europe/London', 
    'Kuopio, Finland', 
    'Kuopio-Halli'
    ),

    createShowElement(
    'Babymetal Tour',
    '25/05/2023',
    '20:00:00',
    'Asia/Jakarta',
    'Jakarta, Indonesia',
    'ICE, BSD City, Hall 10'
    ),

    //Check Time
    createShowElement(
    'Babymetal Tour',
    '28/05/2023',
    '12:34:56',
    'Asia/Bangkok',
    'Bangkok, Thailand',
    'True Icon Hall'
    ),

    //Check Time
    createShowElement(
    'Babymetal Tour',
    '31/05/2023',
    '12:34:56',
    'Asia/Hong_Kong',
    'Hong Kong, China',
    'Asia World Expo, Hall 10'
    ),

    createShowElement(
    'Babymetal Tour',
    '02/06/2023',
    '19:30:00',
    'Asia/Taipei',
    'Taipei, Taiwan',
    'Zepp New Taipei'
    ),

    createShowElement(
    'Babymetal Tour',
    '04/06/2023',
    '20:00:00',
    'Asia/Kuala_Lumpur',
    'Kuala Lumpur, Malaysia',
    'Zepp KL'
    ),

    createShowElement(
    'Babymetal Tour',
    '08/06/2023',
    '19:00:00',
    'Australia/Brisbane',
    'Brisbane, Australia',
    'Fortitude Music Hall'
    ),

    createShowElement(
    'Babymetal Tour',
    '09/06/2023',
    '20:00:00',
    'Australia/Sydney',
    'Sydney, Australia',
    'Hordern Pavillion'
    ),

    createShowElement(
    'Babymetal Tour',
    '11/06/2023',
    '19:00:00',
    'Australia/Melbourne',
    'Melbourne, Australia',
    'Margaret Court Arena'
    ),

    createShowElement(
    'Summer Sonic 2023 (Osaka)',
    '19/08/2023',
    '11:30:00',
    'Asia/Tokyo',
    'Osaka, Japan',
    'Maishima Sonic Park'
    ),

    createShowElement(
    'Summer Sonic 2023 (Tokyo)',
    '20/08/2023',
    '11:30:00',
    'Asia/Tokyo',
    'Tokyo, Japan',
    'Zozomarine Stadium & Makuhari Messe'
    ),

    createShowElement(
    'Blue Ridge Rock Festival',
    '07/09/2023',
    '12:00:00',
    'America/New_York',
    'Virginia, United States',
    'Virginia International Raceway'
    ),

    createShowElement(
    'Louder Than Life',
    '23/09/2023',
    '12:00:00',
    'America/Kentucky/Louisville',
    'Kentucky, United States',
    'Kentucky Exposition Center'
    ),

    createShowElement(
    'Aftershock Fest',
    '07/10/2023',
    '12:00:00',
    'America/Los_Angeles',
    'California, United States',
    'Discovery Park'
    ),

    createShowElement(
    'Jooj',
    '07/10/2023',
    '12:00:00',
    'America/Los_Angeles',
    'California, United States',
    'Discovery Park'
    )
];
        
// Add the show elements to the HTML
const datesbox = document.querySelector(".datesbox");
shows.forEach(show => {
  datesbox.appendChild(show);
});
})