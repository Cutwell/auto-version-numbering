$(document).ready(function (){
    $('.version').each(function() {
        var thisVersion = this;
        var project_name = $(thisVersion).attr('name');
        $.get(
            "https://api.github.com/repos/Cutwell/"+project_name+"/releases",
            function(response) {
                $(thisVersion).append("Version "+response['length']);
            }
        );
        $.get(
            "https://api.github.com/repos/Cutwell/"+project_name+"/stats/contributors",
            function(response) {
                $(thisVersion).append("."+response[0]['total']);
            }
        );
    });
});
