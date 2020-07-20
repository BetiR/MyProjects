$('.nav-link').on('click', function () {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
});


function popUpContactFunc() {
    var popup = document.querySelector(".myPopup2");
    popup.classList.toggle("show");
};

// // Disable form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$('#kompanii').on('click', function (e) {
    $('.toggled').html('');
    $('.toggled').append(`<div class="row toggled position-relative px-3">
                    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 my-auto">
        <h3><b>Компании</b></h3>
        <p class="pt-3">Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат
            перформансот на својата компанија. <br>
            Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се
            адаптираат соодветно. Обуки, семинари, курсеви или team building?<br>
            Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи и адаптира сподели
            својата експертиза со денешните потреби на компаниите.
        </p>
    </div>
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <img src="./assets/images/Za_Nas/IMG_7707.jpg" class="edu rounded" width="100%">
    </div>
</div>`);
});


$('#akademii').on('click', function (e) {
    $('.toggled').html('');
    $('.toggled').append(`<div class="row toggled position-relative px-3">
                    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 my-auto">
                        <h3><b>Едукација</b></h3>
                        <p class="pt-3">Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти
                        помогнеме да го најдеш правилниот
                        skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и
                        персонализирани обуки
            кои одговараат на реалните потреби на денешницата.</p>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <img src="./assets/images/Za_Nas/edukacija1.jpg" class="edu rounded" width="100%">
    </div>
                    </div>`);
});

function myPopUpReserved() {
    var popup = document.querySelector(".myPopup");
    popup.classList.toggle("show");
};

function popUpContactFunc() {
    var popup = document.querySelector(".myPopup2");
    popup.classList.toggle("show");
};


$('#subnavbtn').on('click',
    function () {
        $('#collapsibleSubNavbar').toggleClass('hide')
    });

 