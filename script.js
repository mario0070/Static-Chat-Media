var showUsers = document.getElementById("showUsers")
.addEventListener("click",()=>{
    var users = document.getElementById("users")
    users.classList.toggle("valid")
})

// Send Message
$(document).ready(function(){
    $("#sendMsg").on("click",()=>{
        var value = $("#msg").val();
        var date =new Date()
        var hrs = date.getHours()
        var mins = date.getMinutes()
        var store = 
        `
        <div class="wrap2" id="UserMsg">
            <div class="sentMsg">
                <div class="myMsg">
                    <p>${value}</p>
                    <div>${hrs}:${mins} AM</div>
                </div>
            </div>
        </div>
        `
        

        if(value != ""){
            $("#msgContainer").append(store)
            var notify = document.getElementById("notify").innerHTML = value;
            $("#chatBox").scrollTop($(document).height());
        }else{
            // alert("Cannot send a blank Message")
        }
        var value = $("#msg").val("");
    })
})

// scroll to bottom on page load
$(function() {
    $("#chatBox").scrollTop($(document).height()); 
});


// var closeNav = document.getElementById("close")
// .addEventListener("click",()=>{
//     var users = document.getElementById("users")
//     users.classList.remove("valid")
// })


