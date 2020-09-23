$(function () {
  var original_btn_txt = $('#pay').text();

  function receiveErrors (e) {
      $('#wrapper').removeClass('sending');
      $('.field').removeClass('input-error');
      $('#pay').text(original_btn_txt);

      if (e['err']) {
          for (var idx in e['err']) {
              var field = null;
              switch(e['err'][idx]['field']){
                  case 101: //CVV
                            field = $("#cvv_field");
                            break;
                  case 10:   //Full Name
                            field = $("#fullname_field");
                            break;
                  case 104: //Expiration Date
                            e['err'][idx]['msg'] = e['err'][idx]['msg'].replace(' a ', ' an ');
                            field = $("#expire_field");
                            break;
                  case 100: //Credit Card Number
                  default:
                            field = $("#ccnum_field");
                            break;
              }

              var err_msg_span = $( "span.error-msg" );
              field.addClass('input-error').find(err_msg_span).text(e['err'][idx]['msg']);
          }
      }
  }

  function handleMasks (e) {
      if(no_mask) {
          $('#real_expiration').val($("#card_month").val() + $("#card_year").val());
      } else {
          $('#real_expiration').val($("#expiry").val().replace(/\//g, '').replace(/ /g, ''));
          $('#real_card_number').val($("#ccnum").val().replace(/ /g, ''));
      }
  }

  Template.invalid(receiveErrors);
  Template.preSubmit(handleMasks);
});