
function dropdownHandler(new_link,mobile_link){
    new_link.querySelector('.options').style.display = 'none';

var select_btn = new_link.querySelector('.select_option');

select_btn.addEventListener('click', () => {
    var down_arrow = new_link.querySelector('.fa-angle-down');
    down_arrow.classList.toggle('rotate_transition');
    var drop_down_options = new_link.querySelector('.options');
    drop_down_options.classList.toggle('show_dropdown');
});

var select_options = new_link.querySelector('.select_area');
var social_links = new_link.querySelectorAll('.option');

social_links.forEach((element) => {
    element.addEventListener('click', () => {
        select_options.innerHTML = element.innerHTML;
        var drop_down_options = new_link.querySelector('.options');
        drop_down_options.classList.toggle('show_dropdown');
        var down_arrow = new_link.querySelector('.fa-angle-down');
        down_arrow.classList.toggle('rotate_transition');
        var links = mobile_link.querySelector('.link_in_mobile');
        links.innerHTML = select_options.innerHTML;
    });
});
}

var htmlContent = `
                    <div class="row one">
                        <p><i class="fa-solid fa-equals"></i>Link #1</p>
                        <p class="remove" >Remove</p>
                        </div>
                        <div class="platform">
                        <p>Platform</p>
                        </div>
                        <div class="select">
                        <div class="select_option">
                            <p class="select_area">Select the social links</p>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <h6>Link</h6>
                        <div class="link_icon">
                            <span><i class="fa-solid fa-link"></i></span>
                            <input type="text">
                        </div>
                        <div class="options">
                            <div class="option" id = 'github'>
                                <i class="fa-brands fa-github"></i>
                                <p>Github</p>
                            </div>
                            <div class="option">
                                <i class="fa-brands fa-instagram"></i>
                                <p>Instagram</p>
                            </div>
                            <div class="option">
                                <i class="fa-brands fa-square-x-twitter"></i>
                                <p>Twitter</p>
                            </div>
                            <div class="option">
                                <i class="fa-brands fa-facebook"></i>
                                <p>Facebook</p>
                            </div>
                    </div>
                </div>
                `
    var mobile_links_html_content = `
                                    <div class="link_in_mobile">
                                        <i class="fa-solid fa-diamond"></i>
                                        <p>Social Media</p>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                    `

    let mobile_links_wraper = document.querySelector('.links_in_mobile');

    var new_link_btn = document.querySelector('.add_new_link');
    var new_link_wrapper = document.querySelector(".new_links")

    new_link_btn.addEventListener('click', () => {
    let new_link = document.createElement('div');

    new_link.classList.add('new_link')
    
    let mobile_link = document.createElement('div');
    mobile_link.classList.add('link_in_mobile');
    mobile_link.innerHTML = mobile_links_html_content;

    new_link.innerHTML = htmlContent;
    dropdownHandler(new_link,mobile_link)
    let removeElement = new_link.querySelector('.remove');
    removeElement.addEventListener('click',() =>{
        new_link.remove()
        mobile_link.remove()
    })
   
    new_link_wrapper.appendChild(new_link);
    mobile_links_wraper.appendChild(mobile_link);

});

function previewImage() {
    
    var input = document.getElementById('imageUpload');
    
    let previewImage = document.getElementById('preview-image');
    let my_phone_img = document.querySelector('.phone_image');
    var file = input.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
        my_phone_img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

var Addnew_link = document.querySelector('.add_new_link');
Addnew_link.addEventListener('onclick', () => {

});

const profile = () => {

    document.querySelector('.details_two').style.display = 'none';

    var profile_btn = document.querySelector('.profile');

    profile_btn.addEventListener('click', () => {
        const newLinkSection = document.querySelector('.new_link');

        if (newLinkSection) {
            document.querySelector('.details_two').classList.add('animate__animated');
            document.querySelector('.details_two').classList.add('animate__fadeInDown');
            document.querySelector('.details_two').style.display = 'block';
            document.querySelector('.details').classList.remove('animate__animated');
            document.querySelector('.details').classList.remove('animate__fadeInLeft'); 

        } else {
            alert('Please add new link')
        }
        
    });
};

profile()

const link = () => {
    var link_btn = document.querySelector('.link');

    link_btn.addEventListener('click', () => {
        document.querySelector('.details_two').style.display = 'none';
        document.querySelector('.details').classList.add('animate__animated');
        document.querySelector('.details').classList.add('animate__fadeInLeft');
        document.querySelector('.details').style.display = 'flex';
    });
};

link()
  
const save = () => {
    var save_btn = document.querySelector('.save');
    save_btn.addEventListener('click', () => {
        var selectOption = document.querySelector('.select_option');
        var linkIcon = document.querySelector('.link_icon input');
        var selectArea = document.querySelector('.select_area');

        if (selectArea.innerHTML.trim() !=='Select the social links' && linkIcon.value.trim() !== ''){
                document.querySelector('.details_two').classList.add('animate__animated');
                document.querySelector('.details_two').classList.add('animate__fadeInDown');
                document.querySelector('.details_two').style.display = 'block';
        } else {
            alert('Please select fields')
        }
    });
};

save()

const changingtext = () => {

    var submit_btn = document.querySelector('.submit');
    submit_btn.addEventListener('click', () => {
        var name_input = document.querySelector('.Namefirst');
        document.querySelector('.firstName').innerHTML = name_input.value;
        var last_name = document.querySelector('.Namelast');
        document.querySelector('.lastName').innerHTML = last_name.value;
        var email_btn = document.querySelector('.input_email');
        document.querySelector('.emailclass').innerHTML = email_btn.value;
    });

};

changingtext()

const changingimage = () => {
    var img = document.querySelector('.preview-image')
    document.querySelector('.phone_image') = img;
}

let saveButton = document.querySelector('.submit')

const submitDataToBackend = async (data) =>{
        let response = await fetch('/add_user',{
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        let responseStatus = await response.json();
        return responseStatus
}

const apiDataHandler = async () =>{
        let allSocialLinks = document.querySelectorAll('.new_link')
        let socialObjectArray = []
        let data = {}
        allSocialLinks.forEach((linkValue) =>{
            let social_platform = linkValue.querySelector('.select_area p').textContent
            let social_url = linkValue.querySelector('.link_icon input').value
            let socialObject = {platform:social_platform,url:social_url}
            socialObjectArray.push(socialObject)
        })

        let image = document.querySelector("#preview-image").src
        let fName = document.querySelector(".Namefirst").value
        let lName = document.querySelector('.Namelast').value
        let email = document.querySelector('.input_email').value

        data = {image: image, fName: fName, lName:lName, email:email, social_links:socialObjectArray}
        let response = await submitDataToBackend(data)
        console.log(response)
        let profile = document.getElementById('profileUrl')
        profile.href = response.profileUrl
        profile.textContent = response.profileUrl
}

saveButton.addEventListener('click',apiDataHandler)