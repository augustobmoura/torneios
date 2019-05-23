$(document).ready(function () {
    $('.js-example-basic-multiple').select2();
    $('.js-example-basic-single').select2();
    $('#esconder').hide();
    $('#radios-0').click(function () {
        $(".js-example-basic-multiple").prop("disabled", false);
        $(".classeEsconder").html('');
        $('#esconder').hide();
    });

    $('#radios-1').click(function () {
        $('.js-example-basic-multiple').val(null).trigger('change');
        $(".js-example-basic-multiple").prop("disabled", true);
        $('#esconder').show();
    })

    $("#button-addon4").click(function () {
        let time1 = $('#time1').val();
        let time2 = $('#time2').val();
        let htmlToInsert = `<div class="row classeEsconder" id="esconder" > 
                  <div class="col-md-6"> 
                    <div class="input-group"> 
                      <input type="text" class="form-control" disabled placeholder="Time 1" value="${time1}"
                        aria-label="Recipients username with two button addons" aria-describedby="button-addon4"> 
                    </div> 
                  </div> 
                  <div class="col-md-6"> 
                    <div class="input-group"> 
                      <input type="text" class="form-control" disabled placeholder="Time 2" value="${time2}" 
                        aria-label="Recipients username with two button addons" aria-describedby="button-addon4"> 
                    </div> 
                  </div>
                </div>`;
        $('#appendRow').append('<br>' + htmlToInsert);
    })

});