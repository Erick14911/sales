/*@author:Erick14911
 * var,let,const,string,number,boolean,object,function,undefined,symbol() 
 * typeof x, x instanceof Array, .valueOf()
 * Number(); BigInt(), isNaN(); num.toFixed(); String(); 
 *.toUpperCase(); .toLowerCase(); .length; 
 *
 * Arrays: (.push(); .unshift()) (.pop(); shift();) 
 * .sort((a, b) => { return a - b });  .reverse();
 *
 * Busquedas: .charAt(); .indexOf(""); .lastIndexOf(""); .match(/word/g); .includes("");
 * Remplazo: .substr(start, end); .slice(start, end); .replace("",""); 
 * Cortar: .trim(); .splice(indice, numElementos);
 * Hacer Array:  .split(" "); .trim();
 * Hacer String: .join()
 *
 * Eventos: https://developer.mozilla.org/es/docs/Web/API/Element
 * .addEventListener('event', function, boolean(bubbling, capturing)); 
 * .click .dblclick  .keydown  .keypress  .keyup.key  .keycode  .change   
 * .focus .blur .hover .mouseover .mouseout .mousedown .mouseup .mousemove .chance .input .submit 
 *
 * Efectos: .show('', () => {})
 * .show('fast'); .hide('scale'); .effect("explode");
 * .fadeOut('slow'); .fadeIn('normal'); .fadeTo('blind',1.0); .fadeToggle(shake);
 * .slideUp('drop'); .slideOut('fold'); .slideToggle('puff');  
 *
 * MATH OBJECT ${}:
 * Math.sqrt(); Math.max(); Math.min(); Math.random(); Math.round(); Math.ceil();
 *
 * UI jQuery: https://www.heteroclito.fr/modules/tooltipster/ 
 * .draggable(); .resizable(); .selectable(); .tooltip(); 
 * .datepicker(); .dialog(); .tabs();
 * .sorteable({update: function(event, ui){}});
 * .droppable({drop: function(){}});
 */
// import Clase, { function as alias } from "./" 
// export { function }

'use strict';

window.addEventListener('load', () => {

  if(navigator.cookieEnabled){
    console.log("cookies enabled");
  }

  const IP = "localhost" ?? '197.1.1'; // ? : ; && ;
  let mssg = `${data}`;
// _array.length .includes('') 
  const _array = ['aa','ab']; 
  const [aa, ab] = _array;
  function defFun(){
    let _ans = '';
    for(let i = 0;i<arguments.length;i++){
      _ans += arguments[i];
    }
    return _ans;
  }
  function Const(atr){
    this.atr = atr; 
    this.toString = (args) => {
      return args + ' ' + this.atr;
    };
  }
//  Objeto.prototype.newAtr = '';
  let _obj = new Const()
  console.log(_obj.atr?.data);
//  let _arrayArgs = [];
//  _obj.toString.apply(_obj2,_arrayArgs);
  Object.seal(_obj); // Object.freeze(_json);

/*
  // Ocultar o Mostrar password
  let togglePassword = document.querySelector("#togglePassword");
  let password = document.querySelector("#password");
  togglePassword.addEventListener('click', (event) => {
    let changes = event.target;
    if(password.getAttribute("type") === "password"){
    password.setAttribute("type", "text");
    changes.setAttribute("src","../multimedia/oculto.png");
    }else{
    password.setAttribute("type", "password");
    changes.setAttribute("src","../multimedia/visible.png");
    }
  }, false);
  // Barra de rango
  let respuesta = document.querySelector("#set_range");
  let input_range = document.querySelector(".input_range");
  input_range.addEventListener('click', function(){
    let range = document.querySelector(".input_range").value;
    respuesta.innerHTML = range;
  }, false);
  // Darkmode
  const btnSwitch = document.querySelector('#switch'); 
  btnSwitch.addEventListener('click', (event) => {
    // event.preventDefault();
    let changes = event.target;
    document.body.classList.toggle('dark');
    changes.classList.toggle('active');
    //Guardar estado en el localStorage
    if(document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode','true');
    }else{
      localStorage.setItem('dark-mode','false');
    }
    }, false);
  //Leer el localStorage
  if(localStorage.getItem('dark-mode')==='true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
  }else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
  } 
  // CheckCherry
  let cherry = document.querySelector("#switcherry");
  let switch1 = document.querySelector("#switch");
  cherry.addEventListener('click', (event) => {
    if(switch1.getAttribute("checked")=="true"){
      switch1.removeAttribute("checked"); 
     }else{
      switch1.setAttribute("checked","true");
     }
  }, false);
  //Scroll
  let animado = document.querySelectorAll(".animado");
  function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0;i<animado.length;i++){
      let alturaAnimado = animado[i].offsetTop;
      if(alturaAnimado - 300 < scrollTop){
        animado[i].style.opacity = 1;
      }
    }
  }
  window.addEventListener('scroll', mostrarScroll);
  //Intersection Observer
  const imagen1 = document.getElementById('imagen1');
  const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada ) => {
      if(entrada.isIntersecting){
        entrada.target.classList.add('visible');
      }else{
        entrada.target.classList.remove('visible');
      }
    });
  }
  const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
  });
  observador.observe(imagen1);
  */
});


