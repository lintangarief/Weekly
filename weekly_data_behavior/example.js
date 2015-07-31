$(document).ready(function(){
    $("input:checkbox").change(function() { 
        if($(this).is(":checked")) { 
            $.ajax({
                url: '#',
                type: 'POST',
                data: { strID:$(this).attr("id"), strState:"1" }
            });
        } else {
            $.ajax({
                url: '#',
                type: 'POST',
                data: { strID:$(this).attr("id"), strState:"0" }
            });
        }
    }); 
});
