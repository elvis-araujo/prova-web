var incrementPlus;
var incrementMinus;

var buttonPlus = $('.plus')
var buttonMinus = $('.minus')

var incrementPlus = 
buttonPlus.on('click',function(){
    var _this = $(this).parent('.selecter').find('.total')
    $(_this).val(Number(_this.val())+1)
})

var incrementMinus = 
buttonMinus.on('click',function(){
    var _this = $(this).parent('.selecter').find('.total')
    var amount = Number(_this.val());
    if (amount > 0) {
        $(_this).val(amount-1);
    }
})

$(function(){
    $('#cep').on('change',function(){
        $('#region_label').show()
        $('#region_label').append("Obs.: Para a sua  região o valor do frete é: R$&nbsp;5,00")
    })
})