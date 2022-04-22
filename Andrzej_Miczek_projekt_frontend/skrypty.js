$(window).scroll(function ()
{
    if($(this).width()>=1501){
        { $('#sredni').hide();}
        { $('#maly').hide();}
        if($(this).scrollTop()>300) {
            { $('#duzy').fadeOut();}
            { $('.side-menu-container').fadeIn();}
        }
        else{
            { $('#duzy').fadeIn();}
            { $('.side-menu-container').fadeOut();}
        }}
    if($(this).width()>=1101 && $(this).width()<=1500){
        { $('#duzy').hide();}
        { $('#maly').hide();}
        if($(this).scrollTop()>300) {
            { $('#sredni').fadeOut();}
            { $('.side-menu-container').fadeIn();}
        }
        else{
            { $('#sredni').fadeIn();}
            { $('.side-menu-container').fadeOut();}
   }}if($(this).width()<=1100){
    { $('#duzy').hide();}
    { $('#sredni').hide();}
        if($(this).scrollTop()>300) {
            { $('#maly').fadeOut();}
            { $('.side-menu-container').fadeIn();}
        }
        else{
            { $('#maly').fadeIn();}
            { $('.side-menu-container').fadeOut();}
   }}});$(window).resize(function ()
{
    if($(this).width()>=1501){
        { $('#sredni').hide();}
        { $('#maly').hide();}
        if($(this).scrollTop()>300) {
            { $('#duzy').fadeOut();}
            { $('.side-menu-container').fadeIn();}
        }
        else{
            { $('#duzy').fadeIn();}
            { $('.side-menu-container').fadeOut();}
        }}
    if($(this).width()>=1101 && $(this).width()<=1500){
        { $('#duzy').hide();}
        { $('#maly').hide();}
        if($(this).scrollTop()>300) {
            { $('#sredni').fadeOut();}
            { $('.side-menu-container').fadeIn();}
        }
        else{
            { $('#sredni').fadeIn();}
            { $('.side-menu-container').fadeOut();}
   }}if($(this).width()<=1100){
    { $('#duzy').hide();}
    { $('#sredni').hide();}
        if($(this).scrollTop()>300) {
            { $('#maly').fadeOut();}
            { $('.side-menu-container').fadeIn();}
        }
        else{
            { $('#maly').fadeIn();}
            { $('.side-menu-container').fadeOut();}
   }}});