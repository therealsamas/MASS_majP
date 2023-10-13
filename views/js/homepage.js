const legalRecords = JSON.parse(localStorage.getItem('legalRecords')) || [];

function addRecord() {
  const recordName = document.getElementById('recordName').value;

  if (recordName.trim() === '') {
    alert('Please enter a record name.');
    return;
  }

  legalRecords.push(recordName);
  updateAndDisplayRecords();
}

function removeRecord(index) {
  legalRecords.splice(index, 1);
  updateAndDisplayRecords();
}

function clearRecords() {
  legalRecords.length = 0;
  updateAndDisplayRecords();
}

function updateAndDisplayRecords() {
  displayRecords();
  saveToLocalStorage();
}

function displayRecords() {
  const recordItems = document.getElementById('recordItems');
  recordItems.innerHTML = '';

  if (legalRecords.length === 0) {
    recordItems.innerHTML = '<em>No records available.</em>';
    return;
  }

  legalRecords.forEach((record, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>Record ${index + 1}:</span> ${record}
      <button onclick="removeRecord(${index})">Remove</button>`;
    recordItems.appendChild(listItem);
  });

  const clearButton = document.createElement('button');
  clearButton.textContent = 'Clear All';
  clearButton.onclick = clearRecords;
  recordItems.appendChild(clearButton);
}

function saveToLocalStorage() {
  localStorage.setItem('legalRecords', JSON.stringify(legalRecords));
}

displayRecords();

$(document).ready(function() {
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
            $('.username').text(data.data.name);
            $('.logout').css('display', 'inline-block');
            $('.login-container').hide();
            console.log(data);
          },
          209: function(data) {
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
  let createuser = function(){
    let logform = $('.signupform');
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
            $('.username').text(data.data.name);
            $('.login-container').attr('display','none');
            console.log(data);
          },
          209: function(data) {
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

  $('.recsave').on('click',function(){
    let recname = $('.recname').val();
    let recdata = $('.recdata').val();
    console.log(recname,recdata);
    $.ajax({
      url:'/postdoc',
      type:'post',
      data:{
        recname:recname,recdata:recdata
      },
      statusCode:{
        200: function(data){
          $rlist = $('.record-list');
          const $newli = $('<li>', { class: 'deckcard'});
          const $name = $('<div>').text(recname);
          const $dat = $('<div>').text(recdata);
          $newli.append($name);
          $newli.append($dat);
          // $newli.innerHTML = `
          //   <span>Record ${index + 1}:</span> ${record}
          //   <button onclick="removeRecord(${index})">Remove</button>`;
          $rlist.append($newli);
          $('.recname').val("");
          $('.recdata').val("");
        },
        error: function(error){
          console.log(error.responseText);
        }
      }
    });
  });


  $('.logout').on('click', destroysess);


});