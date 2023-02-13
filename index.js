const main_content = document.getElementsByClassName("card-display")[0];
const courses_count = document.getElementsByClassName("courses-detail")[0];
const classes_count = document.getElementsByClassName("classes-detail")[0];
const num = document.getElementsByClassName("num")[0];



async function getData() {
    const response = await fetch("javascript/data.json");
    const data = await response.json();
    const courses = data.courses;


    courses_count.innerText = `${courses.length}`;
    classes_count.innerText = `${courses.length}`;
    num.innerText = `showing ${courses.length} of ${courses.length} courses`;

    function classes_string(course) {
        const classes = course.classes;
        let classes_str = ``;
        let j = 0;

        if (!classes.length) {
            classes_str += `<option selected>No Classes</option>`;
        }

        if (classes.length === data.total_classes) {
            classes_str += `<option selected>All Classes</option>`;
        }
        for (const clss of classes) {
            if (j === 0 && classes.length != data.total_classes)
                classes_str += `<option selected>${clss}</option>`;
            else
                classes_str += `<option>${clss}</option>`;
        }
        return classes_str;
    }

    for (let course of courses) {

        main_content.innerHTML += `
        <div class ="card ">
            <img src="${course.image}" alt="" class="card-img">
            <div class="details">
                <div class="space-between mb-7">
                    <p class="detail-heading bold">${course.title}</p>
                    <img src="icon/favourite.svg" >
                </div>

                <div class="sub-info">
                    <p class="mb-7"> ${course.subject} ${course.grade}<span class="gcolor">${course.grade_change > 0 ? `+${course.grade_change}` : `${course.grade_change}`}</span></p>
                    <p class="mb-18"> 
                    ${course.units > 0
                ? `
                        <span class="dark bold">${course.units}</span>
                        Units;
                        <span class="dark bold">${course.lesson}</span>
                        lessons; 
                        <span class="dark bold">${course.topics}</span> 
                        topics`
                : ``
            }
                    </p>
                </div>

                <div class="teacher-info">
                    <div class="space-between">
                        <select name="teacher-detail" class="  teacher">
                            ${classes_string(course)}
                        </select>
                    </div>
                </div>

                <div class="course-info">
                    ${course.classes.length > 0 ?
                `<span id="cs">${course.students} Students</span>` : ``}
                    ${course.classes.length > 0 && course.start_date !== "" ?
                `<span>${course.start_date} ${course.end_date}</span>` : ``}
                </div>
                </div>
                <div class="card-icons">
                    <img src="icon/preview.svg" alt="">
                    <img src="icon/manage course.svg" alt="">
                    <img src="icon/grade submissions.svg" alt="">
                    <img src="icon/reports.svg" alt="">    
                </div>
            </div>`

    }

}
getData();


const hamburger_list = document.getElementById("hamburger-list");
const verticle_nav  = document.getElementsByClassName("verticle-nav")[0] ;
const hamburger_items = document.getElementsByClassName("hamburger-item");
const dropdown = document.querySelectorAll('.dropdown');
const alertIcon = document.querySelector('.alert-icon');
const notificationArea = document.querySelector('.notificationArea');
const announcementIcon = document.querySelector('.announcement-icon');
const announcementArea = document.querySelector('.announcementArea');

let isin = false;

hamburger_list.addEventListener("mouseenter", ()=> {
    // verticle_navbar.style.display = "inline-block";
    verticle_nav.setAttribute("id", "verticle-navbar");
    
    console.log("mouse in");
    isin = true;
});

hamburger_list.addEventListener("mouseleave", ()=> {
    isin = false;
    console.log("mouseleave");
    if(verticle_nav.hasAttribute("id")) {
        console.log("mouseleave");
        setTimeout(()=>{
            if(!isin) {
                // verticle_navbar.style.display = "none";
                // verticle_navbar.style.visibility = "hidden";
                verticle_nav.removeAttribute("id");
                //alert_icon_to_white.style.filter = "none";
            }
        },300)
    }
    
});

for(let item of Array.from(hamburger_items)) {
    item.addEventListener("click", ()=> {
        
        for(let i of Array.from(hamburger_items)) {
            i.classList.remove("selected");
        }
        item.classList.add("selected");
    });
}

for (let dropdownbtn of dropdown) {
    dropdownbtn.addEventListener('click', () => {
        const menuSubItems = dropdownbtn.children[1];
        const dropdownArrow = dropdownbtn.children[0].children[0];

        if (menuSubItems.style.display == "block") {
            menuSubItems.style.display = 'none';
            menuSubItems.style.height = '0px';
            dropdownArrow.style.rotate = '90deg'
        }
        else {
            menuSubItems.style.display = 'block';
            menuSubItems.style.height = 'max-content';
            dropdownArrow.style.rotate = '-90deg'
        }
    })
}
// submenu button script end


// alert icon script start
setTimeout(function(){
    alertIcon.addEventListener('mouseover', () => {
        notificationArea.style.transform = 'scaleY(1)';
        alertIcon.children[1].style.display = 'none';
        alertIcon.children[0].style.filter = 'brightness(0) invert(1)'
    
    })
 }, 1000);
alertIcon.addEventListener('mouseover', () => {
    notificationArea.style.transform = 'scaleY(1)';
    alertIcon.children[1].style.display = 'none';
    alertIcon.children[0].style.filter = 'brightness(0) invert(1)'

})
alertIcon.addEventListener('mouseout', () => {
    notificationArea.style.transform = 'scaleY(0)'
    alertIcon.children[1].style.display = 'flex';
    alertIcon.children[1].style.paddingLeft = '4px';
    alertIcon.children[0].style.filter = 'brightness(0) invert(1)' 
})
notificationArea.addEventListener('mouseover', ()=>{
    notificationArea.style.transform = 'scaleY(1)'
    alertIcon.children[1].style.display = 'none';
    alertIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
notificationArea.addEventListener('mouseout', () => {
    notificationArea.style.transform = 'scaleY(0)'
    alertIcon.children[1].style.display = 'flex';
    alertIcon.children[0].style.filter = 'brightness(0) invert(1)'  
})
// alert icon script end


// announcement icon script start
announcementIcon.addEventListener('mouseover', () => {
    announcementArea.style.transform = 'scaleY(1)'
    announcementIcon.children[1].style.display = 'none';
    announcementIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
announcementIcon.addEventListener('mouseout', () => {
    announcementArea.style.transform = 'scaleY(0)'
    announcementIcon.children[1].style.display = 'flex';
    announcementIcon.children[1].style.paddingLeft = '5px';
    announcementIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
announcementArea.addEventListener('mouseover', () => {
    announcementArea.style.transform = 'scaleY(1)'
    announcementIcon.children[1].style.display = 'none';
    announcementIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
announcementArea.addEventListener('mouseout', () => {
    announcementArea.style.transform = 'scaleY(0)'
    announcementIcon.children[1].style.display = 'flex';
    announcementIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
// announcement icon script end