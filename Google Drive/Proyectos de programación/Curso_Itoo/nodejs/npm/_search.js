const ajax=require("ajax");
function getJsonData(searchData){
    ajax.$.ajax("countries.json",{
        dataType: 'json',
        cache: false,
        data: {data: searchData},
        async: false,
        type: 'POST'
    })
    .done((response)=>{
        $.each(response,function(index, element){
            console.log(element+"\n")
        });
    })
    .fail((request, errorType, errorMessage)=>{
        console.log(errorMessage);
    });
}
module.exports.dato={
    getJsonData: getJsonData
};