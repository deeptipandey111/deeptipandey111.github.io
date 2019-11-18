$(document).ready(function() {

    $("#ch3form").submit(function() {

        var standingChecked = false;
        var fruitChecked = false;
        $('input[name=standing]:checked').each(function() {
            standingChecked = this.checked;
        });


        $('input[name=fruit]:checked').each(function() {
            fruitChecked = this.checked;
        });

        if(!standingChecked && !fruitChecked) {
            alert("You must pick a fruit & standing!");
        }
        
        if(standingChecked && !fruitChecked) {
            alert("You must pick a fruit!");
        }
        
        if(!standingChecked && fruitChecked) {
            alert("You must pick a standing!");
        }

        if(standingChecked && fruitChecked) {
            return true;

        }

        return false;

        
    });

});
// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;





//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
    
//     // alert("You must pick a fruit!")
//     // return false;
//   }