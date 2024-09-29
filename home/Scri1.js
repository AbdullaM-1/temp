var names = ['Steve', 'Caret', 'Nikhil', 'Michelle', 'Kauri', 'Sirius', 'Amir'];

// Set border-bottom style using vanilla JS
document.getElementById('chats').style.borderBottom = '2px solid #fff';

// Hide elements
document.querySelectorAll('.option').forEach(function(option) {
    option.style.display = 'none';
});
document.querySelectorAll('.search').forEach(function(search) {
    search.style.display = 'none';
});

// Add event listeners for mainbody click
document.querySelector('.mainbody').addEventListener('click', function() {
    document.querySelectorAll('.option').forEach(function(option) {
        option.style.display = 'none';
    });
    document.querySelectorAll('.search').forEach(function(search) {
        search.style.display = 'none';
    });
});

// Add event listeners for fa-ellipsis-v click
document.querySelector('.fa-ellipsis-v').addEventListener('click', function() {
    document.querySelectorAll('.option').forEach(function(option) {
        option.style.display = 'block';
    });
});

// Add event listeners for fa-search click
document.querySelector('.fa-search').addEventListener('click', function() {
    var search = document.querySelector('.search');
    search.style.display = 'block';
    search.focus();
});

// Add event listeners for fa-users click
document.querySelector('.fa-users').addEventListener('click', function() {
    document.getElementById('contacts').style.borderBottom = '2px solid #fff';
    document.getElementById('chats').style.borderBottom = '2px solid transparent';
    document.getElementById('calls').style.borderBottom = '2px solid transparent';
    document.querySelector('.mainbody').innerHTML = '<p class="callspara">No Contacts to display</p>';
});

// Add event listener for chats click
document.getElementById('chats').addEventListener('click', function() {
    document.getElementById('chats').style.borderBottom = '2px solid #fff';
    document.getElementById('calls').style.borderBottom = '2px solid transparent';
    document.getElementById('contacts').style.borderBottom = '2px solid transparent';
    var mainBody = document.querySelector('.mainbody');
    mainBody.innerHTML = '';
    for (var i = 0; i < 6; i++) {
        var div = document.createElement('div');
        div.classList.add('people');
        div.innerHTML = '<img class="peoplea" src="http://www.techz.vn/review/html/public/images/no_user_pic.png">' +
            '<p class="peoplen">' + names[i] + '</p>' +
            '<p class="dates"></p>' +
            '<i class="fa fa-check"></i>' +
            '<p class="peoplem">Who are you?</p>';
        mainBody.appendChild(div);
    }
});

// Add event listener for calls click
document.getElementById('calls').addEventListener('click', function() {
    document.getElementById('calls').style.borderBottom = '2px solid #fff';
    document.getElementById('chats').style.borderBottom = '2px solid transparent';
    document.getElementById('contacts').style.borderBottom = '2px solid transparent';
    document.querySelector('.mainbody').innerHTML = '<p class="callspara">No recent calls</p>';
});

// Add event listener for contacts click
document.getElementById('contacts').addEventListener('click', function() {
    document.getElementById('contacts').style.borderBottom = '2px solid #fff';
    document.getElementById('chats').style.borderBottom = '2px solid transparent';
    document.getElementById('calls').style.borderBottom = '2px solid transparent';
    document.querySelector('.mainbody').innerHTML = '<p class="callspara">No Contacts to display</p>';
});

// Time
setInterval(function() {
    var d = new Date();
    document.querySelectorAll('.dates').forEach(function(dateElement) {
        dateElement.textContent = d.toLocaleTimeString();
    });
}, 1000); // Adjusted to 1000ms for 1 second intervals

// Append people elements on page load
var mainBody = document.querySelector('.mainbody');
for (var i = 0; i < 6; i++) {
    var div = document.createElement('div');
    div.classList.add('people');
    div.innerHTML = '<img class="peoplea" src="http://www.techz.vn/review/html/public/images/no_user_pic.png">' +
        '<p class="peoplen">' + names[i] + '</p>' +
        '<p class="dates"></p>' +
        '<i class="fa fa-check"></i>' +
        '<p class="peoplem">Who are you?</p>';
    mainBody.appendChild(div);
}
