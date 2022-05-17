console.log( 'js' );

$( document ).ready( onReady );

  function onReady() {
  // Establish Click Listeners
  console.log('DOM ready');
   $('#addButton').on('click',addKoala );

  // load existing koalas on page load
  getKoalas();
}; // end doc ready



function addKoala() {
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    };

  console.log ('adding', koalaToSend);
    // call saveKoala with the new obejct 
  
$.ajax ({
method: 'POST',
url: '/koalas',
data: koalaToSend
}).then(function(response){
console.log ('back from /koalas POST:',response);
// if succesful update DOM
getKoalas();
// empty inputs
$('#nameIn').val(''),
  $('#ageIn').val(''),
  $('#genderIn').val(''),
  $('#readyForTransferIn').val(''),
  $('#notesIn').val('')
}).catch (function(err){
//if not, alert user
console.log(err);
alert('error adding koala');
});
}; 


// function getKoalas(){
//   console.log( 'in getKoalas' );
  // ajax call to server to get koalas
// end getKoalas

function getKoalas( ){
  console.log( 'in getKoala' );
  // ajax call to server to get koalas
 $.ajax({
  method:'GET',
  url: '/koalas'
 }).then (function(response){
   console.log ('back from /koalas GET', response); 
   let el = $('#viewKoalas');
   el.empty();
   for (let i=0; i<response.length; i++){
   el.append(`<tr><td> ${response[i].name}</td><td>${response[i].age}</td><td>${response[i].gender}</td><td>${response[i].ready_to_transfer}</td><td>${response[i].notes}</td></tr>`);
   }
  }).catch(function(err){
    console.log (err);
    //alert user of error
    alert ('error getting koalas');
  })
 }

