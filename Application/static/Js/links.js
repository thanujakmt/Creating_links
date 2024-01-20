
function dropdownHandler(new_link){
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
                            <div class="option">
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



var new_link_btn = document.querySelector('.add_new_link');
var new_link_wrapper = document.querySelector(".new_links")

new_link_btn.addEventListener('click', () => {
    let new_link = document.createElement('div');

    new_link.classList.add('new_link')
  
    new_link.innerHTML = htmlContent;
    dropdownHandler(new_link)
    let removeElement = new_link.querySelector('.remove')
    removeElement.addEventListener('click',() =>{
        new_link.remove()
    })
   
    new_link_wrapper.appendChild(new_link)

});