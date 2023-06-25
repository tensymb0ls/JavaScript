// console.log('hello')
// const button = document.getElementById('button');
// console.log(button);
// const button2 = $('button');
// console.log(button2[0]);
// $('button').hide();

// let check = 1;
// $('#button').click(() => {
//     if (check) {
//         $('#input').hide();
//         check = 0
//     } else {
//         if (!check) {
//             $('#input').show();
//             check = 1;
//         }
//     }
// })
// ----------- or -------------
$('.button').click(function () {
    $('.input').toggle();
})
// ----------------------------

$('.click').click(function () {
    $(this).siblings(".lorem").slideToggle();
})