$(document).ready(function () {
    const gridViewBtn = document.getElementById('gridBtnView');
    const listViewBtn = document.getElementById('listBtnView');
    const caleViewBtn = document.getElementById('calendarBtnView');
    const showdate = document.querySelectorAll('.showdates');
    const countdowns = document.getElementById('countdowns');
    const titleGrid = document.querySelectorAll('.title');
    const titleList = document.querySelectorAll('.titlelist');
    const showinfos = document.querySelectorAll('.showinfos');
    const dateGrid = document.querySelectorAll('.dateshow');
    const dateList = document.querySelectorAll('.dateList');
    const lines = document.querySelectorAll('.newline');

    gridViewBtn.addEventListener('click', function() {
        gridViewBtn.classList.add('active');
        gridViewBtn.classList.remove('inactive');
        listViewBtn.classList.add('inactive');
        listViewBtn.classList.remove('active');
        caleViewBtn.classList.add('inactive');
        caleViewBtn.classList.remove('active');
        countdowns.classList.remove('-list');
        for (let i = 0; i < titleList.length; i++) {
            titleList[i].classList.add('invisible');
        }
        for (let i = 0; i < titleGrid.length; i++) {
            titleGrid[i].classList.remove('invisible');
        }
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.remove('invisible');
        }
        for (let i = 0; i < dateList.length; i++) {
            dateList[i].classList.add('invisible');
        }
        for (let i = 0; i < dateGrid.length; i++) {
            dateGrid[i].classList.remove('invisible');
        }
        for (let i = 0; i < showinfos.length; i++) {
            showinfos[i].classList.remove('infolist-margin');
        }
        for (let i = 0; i < showdate.length; i++) {
            showdate[i].classList.remove('list');
        }
    });

    listViewBtn.addEventListener('click', function() {
        gridViewBtn.classList.add('inactive');
        gridViewBtn.classList.remove('active');
        listViewBtn.classList.add('active');
        listViewBtn.classList.remove('inactive');
        caleViewBtn.classList.add('inactive');
        caleViewBtn.classList.remove('active');
        countdowns.classList.add('-list');
        for (let i = 0; i < titleList.length; i++) {
            titleList[i].classList.remove('invisible');
        }
        for (let i = 0; i < titleGrid.length; i++) {
            titleGrid[i].classList.add('invisible');
        }
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.add('invisible');
        }
        for (let i = 0; i < dateList.length; i++) {
            dateList[i].classList.remove('invisible');
        }
        for (let i = 0; i < dateGrid.length; i++) {
            dateGrid[i].classList.add('invisible');
        }
        for (let i = 0; i < showinfos.length; i++) {
            showinfos[i].classList.add('infolist-margin');
        }
        for (let i = 0; i < showdate.length; i++) {
            showdate[i].classList.add('list');
        }

    });

    caleViewBtn.addEventListener('click', function() {
        gridViewBtn.classList.add('inactive');
        gridViewBtn.classList.remove('active');
        listViewBtn.classList.add('inactive');
        listViewBtn.classList.remove('active');
        caleViewBtn.classList.add('active');
        caleViewBtn.classList.remove('inactive');
    });

});

//const viewModeBtns = document.getElementsByClassName('view-mode-btn');
//const body = document.querySelector('body');

//for (let i = 0; i < viewModeBtns.length; i++) {
//  viewModeBtns[i].addEventListener('click', function() {
//    const mode = this.dataset.mode;
//    if (mode === 'list') {
//      body.classList.remove('grid-view');
//      body.classList.add('list-view');
//    } else if (mode === 'grid') {
//      body.classList.remove('list-view');
//      body.classList.add('grid-view');
//    }
//  });
//}

// listViewBtn.addEventListener('click', function() {
//    body.classList.remove('grid-view');
//    body.classList.add('list-view');
//    listViewBtn.classList.add('hidden');
//    gridViewBtn.classList.remove('hidden');
// });

// svg.classList.add('active');