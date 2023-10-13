

const loginFormContent = document.getElementById('loginFormContent');
const loginSubmit = document.getElementById('loginSubmit');

const signupFormContent = document.getElementById('signupFormContent');
const signupSubmit = document.getElementById('signupSubmit');

// script.js
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const blurBg = document.getElementById('blurBg');


blurBg.addEventListener('click', () => {
    closeForms();
});

function showLoginForm() {
    loginForm.style.display = 'block';
    blurBg.style.display = 'block';
}

function showSignupForm() {
    signupForm.style.display = 'block';
    blurBg.style.display = 'block';
}

function closeForms() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    blurBg.style.display = 'none';
}


$(document).ready(function(){


    $('.login').on('click', function() {
        showLoginForm();
    });

    $('.signup').on('click', function() {
        showSignupForm();
    });
  let sessioncreate = function(){
    let logform = $('.loginform');
    let action = '/sessioncreate';
    // console.log(action);
    logform.submit(function(event){
      event.preventDefault();
      console.log(event);
      const url = action;
      console.log(url);
      $.ajax({
        type: 'post',
        url: url,
        data: logform.serialize(),
        statusCode: {
          200: function(data){
            // toastr.success(data.message);
            $('.user').text(data.data.name);
            $('.user').css('display', 'inline-block');
            $('.signout').css('display', 'inline-block');
            $('.login').css('display','none');
            $('.signup').css('display','none');
            closeForms();
            console.log(data);
          }
        },
        error : function(error){
          console.log(error.responseText);
        }
      })  
    });
  }
  let createuser = function(){
    let logform = $('.signupForm');
    let action = '/createuser';
    // console.log(action);
    logform.submit(function(event){
      event.preventDefault();
      console.log(event);
      const url = action;
      console.log(url);
      $.ajax({
        type: 'post',
        url: url,
        data: logform.serialize(),
        statusCode: {
          200: function(data){
            // toastr.success(data.message);
            console.log(data);
          },
          208: function(data) {
            // toastr.error(data.message);
            console.log(data);
          }
        },
        error : function(error){
          console.log(error.responseText);
        }
      })  
    });
  }
  createuser();
  sessioncreate();

  let destroysess = function(){
    $.ajax({
      url: '/dessess',
      type: 'post',
      statusCode: {
        210: function(data) {
          // toastr.success(data.message);
          // console.log('logout suvc');
          window.location.href = '/';
        }
      },
      error: function(error){
        console.log(error.responseText);
      }
    })
  }

  $('.logout').on('click', destroysess);

});