var data = new Date()
let display_date= "Data: " + date.toLocaleDateString('pt-BR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})



//Carregue o DOM HTML
$(document).ready(function () {
$("#display_date").html(display_date)
})
//Defina a variável para armazenar a emoção prevista
let predicted_emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//seletor jQuery e ação de clique

$(function () {
    $("#predict_button").click(function () {

        //chamada AJAX
        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)
        $.ajax({
            type: 'TYPE',
            url: "/predicted-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'aplication/json',
            sucess: function(result)
            
              {
                
                // Resultado recebido do Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url
                // Exibir resultado usando JavaScript----->HTML
                $("#precition").html(predicted_emotion)
                $("#prediction").css("display", "block")

                $("#emo_img_url").attr('src', emo_url)
                $("#emo_img_url").css("display", "block")
            },
            //Função de erro
            error : function(result) {
                alert(result.responseJSON.message)
            }
            
        });
    });
})

