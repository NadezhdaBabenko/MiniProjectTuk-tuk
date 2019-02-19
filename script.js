//на втором блоке кнопки переключения 
var second_block_btn1=document.getElementById('second_block_btn1');
var second_block_btn2=document.getElementById('second_block_btn2');
var second_block_img=document.getElementById('second_block_img');
var load=document.getElementById('load');
var second_block=document.getElementById('second_block');

second_block_btn1.addEventListener('click', block2_change_img1);
second_block_btn2.addEventListener('click', block2_change_img2);

function block2_change_img1(){
    second_block_btn1.style.backgroundColor='#089bf1';
    second_block_btn2.style.backgroundColor='white';
    second_block_img.src="../Tuk-tuk/img/img1.png"; 
}

function block2_change_img2(){
    second_block_btn2.style.backgroundColor='#089bf1';
    second_block_btn1.style.backgroundColor='white';
    second_block_img.src="../Tuk-tuk/img/img2.png"; 
}

//Запускает таймер
window.setInterval(timer, 10000);
function timer() {
    var img1 = document.getElementById('second_block_img');
    if (img1.src.endsWith('1.png')){
        img1.src = '../Tuk-tuk/img/img2.png';
        second_block_btn2.style.backgroundColor='#089bf1';
        second_block_btn1.style.backgroundColor='white';
    }
    else if (img1.src.endsWith('2.png')){
        img1.src = '../Tuk-tuk/img/img1.png';
        second_block_btn1.style.backgroundColor='#089bf1';
        second_block_btn2.style.backgroundColor='white';     
    }
}

// 3 BLOCK
var third_block_a=document.getElementsByClassName('third_block_a');
for (i=0; i<third_block_a.length; i++){
    third_block_a[i].addEventListener('click', function(){
        if(!(this.classList.contains('active'))){
            for (i=0; i<third_block_a.length; i++){
            third_block_a[i].classList.remove('active');            
        }
        this.classList.add('active');
        }
    });
}

// наведение на продукт
var third_block_slide=document.getElementsByClassName('third_block_slide');
for (i=0; i<third_block_slide.length; i++){
    third_block_slide[i].addEventListener('mouseover', function(){
        this.style.boxShadow='0px 0px 16px 1px rgba(68,68,68,1)';
        var icons_img=this.getElementsByClassName('icons_img');
        for (i=0; i<icons_img.length; i++){
            icons_img[i].style.visibility='visible';
        }
    });
}
for (i=0; i<third_block_slide.length; i++){
    third_block_slide[i].addEventListener('mouseout', function(){
        this.style.boxShadow='none';
        var icons_img=this.getElementsByClassName('icons_img');
        for (i=0; i<icons_img.length; i++){
            icons_img[i].style.visibility='hidden';
        }
    });
}

// переключение слайдов продукции
// наведение на кнопки вперед, назад
var third_block_next_btn=document.getElementById('third_block_next_btn');
third_block_next_btn.addEventListener('mouseover', function(){
    third_block_next_btn.style.backgroundColor='#444444';
    third_block_next_btn.style.border='#444444';
    third_block_next_btn.style.color='white';
});
third_block_next_btn.addEventListener('mouseout', function(){
    third_block_next_btn.style.backgroundColor='white';
    third_block_next_btn.style.border='white';
    third_block_next_btn.style.color='#444444';
});

var third_block_prev_btn=document.getElementById('third_block_prev_btn');
third_block_prev_btn.addEventListener('mouseover', function(){
    third_block_prev_btn.style.backgroundColor='#444444';
    third_block_prev_btn.style.border='#444444';
    third_block_prev_btn.style.color='white';
});
third_block_prev_btn.addEventListener('mouseout', function(){
    third_block_prev_btn.style.backgroundColor='white';
    third_block_prev_btn.style.border='white';
    third_block_prev_btn.style.color='#444444';
});

// кнопка вперед
let third_block_slide_first=document.getElementById('third_block_slide_first');
let prev_btn_new=document.getElementById('third_block_prev_btn_new');
let next_btn_pop=document.getElementById('third_block_next_btn_pop');
let prev_btn_pop=document.getElementById('third_block_prev_btn_pop');
let next_btn_new=document.getElementById('third_block_next_btn_new');
let scroll = 0; 
let scroll_new = 0;
let scroll_popular = 0;

third_block_next_btn.addEventListener('click', function(){
    third_block_slide_first.style.marginLeft = scroll - 75 + '%' ;
    third_block_slide_first.style.transition= '.9s'; 
    scroll -= 75;
    third_block_prev_btn.style.visibility = 'visible';
    // изменить скролл при добавлении товара
    if(scroll == -225){
        third_block_next_btn.style.visibility = 'hidden';
    }
});

next_btn_new.addEventListener('click', function(){
    third_block_slide_first_new.style.marginLeft = scroll_new - 75 + '%' ;
    third_block_slide_first_new.style.transition= '.9s'; 
    scroll_new -= 75;
    prev_btn_new.style.visibility = 'visible';
    // изменить скролл при добавлении товара
    console.log(scroll_new);
    if(scroll_new == -225){
        next_btn_new.style.visibility = 'hidden';
    }
});

next_btn_pop.addEventListener('click', function(){
    third_block_slide_first_popular.style.marginLeft = scroll_popular - 75 + '%' ;
    third_block_slide_first_popular.style.transition= '.9s'; 
    scroll_popular -= 75;
    prev_btn_pop.style.visibility = 'visible';
    // изменить скролл при добавлении товара
    if(scroll_popular == -225){
        next_btn_pop.style.visibility = 'hidden';
    }
});

// кнопка назад
third_block_prev_btn.addEventListener('click', function(){
        third_block_slide_first.style.marginLeft = scroll + 75 + '%';
        third_block_slide_first.style.transition= '.9s'; 
        scroll += 75;
        if(scroll == 0){
            third_block_prev_btn.style.visibility = 'hidden';
        }
        if(scroll > -225){
            third_block_next_btn.style.visibility = 'visible';
        }
});

prev_btn_new.addEventListener('click', function(){
    third_block_slide_first_new.style.marginLeft = scroll_new + 75 + '%';
    third_block_slide_first_new.style.transition= '.9s'; 
    scroll_new += 75;
    if(scroll_new == 0){
        prev_btn_new.style.visibility = 'hidden';
    }
    if(scroll_new > -225){
        next_btn_new.style.visibility = 'visible';
    }
});

prev_btn_pop.addEventListener('click', function(){
    third_block_slide_first_popular.style.marginLeft = scroll_popular + 75 + '%';
    third_block_slide_first_popular.style.transition= '.9s'; 
    scroll_popular += 75;
    if(scroll_popular == 0){
        prev_btn_pop.style.visibility = 'hidden';
    }
    if(scroll_popular > -225){
        next_btn_pop.style.visibility = 'visible';
    }
});

// переключение категорий
var third_block_stock_btn=document.getElementById('third_block_stock_btn');
var third_block_new_btn=document.getElementById('third_block_new_btn');
var third_block_popular_btn=document.getElementById('third_block_popular_btn');

var third_block_slide=document.getElementById('third_block_slide');
var third_block_slide_new=document.getElementById('third_block_slide_new');
var third_block_slide_popular=document.getElementById('third_block_slide_popular');

third_block_stock_btn.addEventListener('click', function(){
    console.log(scroll);
    if(scroll != 0){
        third_block_prev_btn.style.visibility='visible';
    }else{
        third_block_prev_btn.style.visibility='hidden';
    }
    third_block_slide.style.visibility='visible';
    third_block_slide_popular.style.visibility='hidden';
    third_block_slide_new.style.visibility='hidden';
    third_block_next_btn.style.visibility='visible';
    next_btn_new.style.visibility='hidden';
    prev_btn_new.style.visibility='hidden';
    next_btn_pop.style.visibility='hidden';
    prev_btn_pop.style.visibility='hidden';
    
    document.getElementById('third_block_btns_new').style.visibility = "hidden";
    document.getElementById('third_block_btns_pop').style.visibility = "hidden";
});

third_block_new_btn.addEventListener('click', function(){
    console.log(scroll_new);
    if(scroll_new != 0){
        prev_btn_new.style.visibility='visible';
    }else{
        prev_btn_new.style.visibility='hidden';
    }
    third_block_slide.style.visibility='hidden';
    third_block_slide_popular.style.visibility='hidden';
    third_block_slide_new.style.visibility='visible';
    third_block_next_btn.style.visibility='hidden';
    third_block_prev_btn.style.visibility='hidden';
    next_btn_new.style.visibility='visible';
    next_btn_pop.style.visibility='hidden';
    prev_btn_pop.style.visibility='hidden';
    document.getElementById('third_block_btns').style.visibility = "hidden";
    document.getElementById('third_block_btns_pop').style.visibility = "hidden";
    console.log(third_block_slide);
});

third_block_popular_btn.addEventListener('click', function(){
    if(scroll_popular != 0){
        prev_btn_pop.style.visibility='visible';
    }else{
        prev_btn_pop.style.visibility='hidden';
    }
    third_block_slide.style.visibility='hidden';
    third_block_slide_popular.style.visibility='visible';
    third_block_slide_new.style.visibility='hidden';
    third_block_next_btn.style.visibility='hidden';
    third_block_prev_btn.style.visibility='hidden';
    next_btn_new.style.visibility='hidden';
    prev_btn_new.style.visibility='hidden';
    next_btn_pop.style.visibility='visible';
    document.getElementById('third_block_btns_new').style.visibility = "hidden";
    document.getElementById('third_block_btns').style.visibility = "hidden";
});

// открытие меню
var first_block_menu_right_bars= document.getElementById('first_block_menu_right_bars');
close = false;
first_block_menu_right_bars.addEventListener('click', function(){
    if(close == false){
        var menu_div=document.getElementById('menu_div');
        var background=document.getElementsByClassName('background')[0];
        var first_block=document.getElementById('first_block');
        var content=document.getElementsByClassName('content')[0];
        var icon = document.getElementById('first_block_menu_right_bars');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close');
        menu_div.style.left='0';
        background.style.display='block';
        first_block.style.position='fixed';
        first_block.style.left='450px';
        content.style.left='450px';
        content.style.transition='.3s' + 'ease';
        content.style.position='absolute';
        content.style.overflowY = "hidden";
        close = true;
        document.getElementById('fixed').style.position='fixed';
        main_menu.style.display='block';
        menu_btn.style.display='none';
        menu_menu_a.innerHTML='Меню';
        menu_2_level.style.display='none';
        menu_3_level_1.style.display='none';
        menu_3_furniture.style.display='none';
        menu_3_light.style.display='none';
    }else{
        var menu_div=document.getElementById('menu_div');
        var background=document.getElementsByClassName('background')[0];
        var first_block=document.getElementById('first_block');
        var content=document.getElementsByClassName('content')[0];
        var icon = document.getElementById('first_block_menu_right_bars');
        icon.classList.remove('fa-close');
        icon.classList.add('fa-bars');
        menu_div.style.left='-450';
        background.style.display='none';
        first_block.style.position='fixed';
        first_block.style.left='0px';
        content.style.position='inherit';
        content.style.left='0px';
        content.style.transition='.3s' + 'ease';
        document.getElementById('fixed').style.position='inherit';
        close = false;
    }
});

// переключения языка
const st = {};
st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');
st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');
st.flap.addEventListener('transitionend', () => {
    if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    } else {
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    }
})
st.clickHandler = (e) => {
    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
});
document.addEventListener('click', (e) => st.clickHandler(e));




// выпадающее боковое меню мать его
var main_menu=document.getElementById('main_menu');
var menu_btn=document.getElementById('menu_btn');
var menu_2_level=document.getElementById('menu_2_level');
var menu_menu_a=document.getElementById('menu_menu_a');
var menu_3_level_1=document.getElementById('menu_3_level_1');
var menu_3_light=document.getElementById('menu_3_light');

// открыть каталог
function open_cataloge(){
    main_menu.style.display='none';
    menu_btn.style.display='block';
    menu_2_level.style.display='block';
    menu_menu_a.innerHTML='Каталог товаров';
}

// выйти из .. кнопка назад
function close_cataloge(){ 
    if(menu_menu_a.innerHTML=='Каталог товаров'){
        menu_menu_a.innerHTML='Меню';
        menu_btn.style.display='none';
        menu_2_level.style.display='none';
        main_menu.style.display='block';
    }
    else if(menu_menu_a.innerHTML=='Камины'){
        // скрыть камины
        menu_menu_a.innerHTML='Каталог товаров';
        menu_3_level_1.style.display='none'; 
        // открыть каталог
        menu_2_level.style.display='block';
        main_menu.style.display='none';
    }
    else if(menu_menu_a.innerHTML=='Мебель'){
        // скрыть мебель
        menu_menu_a.innerHTML='Каталог товаров';
        menu_3_furniture.style.display='none'; 
        // открыть каталог
        menu_2_level.style.display='block';
        main_menu.style.display='none';
    }
    else if(menu_menu_a.innerHTML=='Освещение'){
        // скрыть мебель
        menu_menu_a.innerHTML='Каталог товаров';
        menu_3_light.style.display='none'; 
        // открыть каталог
        menu_2_level.style.display='block';
        main_menu.style.display='none';
    }
}

// открыть камины
function open_fireplaces(){
    // скрыть каталог
    menu_2_level.style.display='none';
    menu_menu_a.innerHTML='Камины';
    // показать камины
    menu_3_level_1.style.display='block';
}
// открыть мебель
function open_furniture(){
    // скрыть каталог
    menu_2_level.style.display='none';
    menu_menu_a.innerHTML='Мебель';
    // показать мебель
    menu_3_furniture.style.display='block';
};
// открыть освещение
function open_light(){
    // скрыть каталог
    menu_2_level.style.display='none';
    menu_menu_a.innerHTML='Освещение';
    // показать мебель
    menu_3_light.style.display='block';
};

// открыть каталог
var menu_catalog_btn=document.getElementById('menu_catalog_btn');
menu_catalog_btn.addEventListener('click', open_cataloge)
// кнопка назад из каталога
menu_btn.addEventListener('click', close_cataloge);
// открыть камины
var menu_btn_2_1=document.getElementById('menu_btn_2_1');
menu_btn_2_1.addEventListener('click', open_fireplaces);
// открыть мебель
menu_btn_2_2.addEventListener('click', open_furniture);
// открыть мебель
menu_btn_2_3.addEventListener('click', open_light);