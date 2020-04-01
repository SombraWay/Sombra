$(document).ready(function () { 
    $('.nav li').hover(
     function () {
     $(this) .addClass('active');  // Добавляем класс bounce
     },
     function () {
     $(this) .removeClass('active');  // Убираем класс bounce
     }
     )});