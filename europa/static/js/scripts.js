$("#calculate-lcv").click(function(e) {
  e.preventDefault();
  var avg_price = Number($('#inputHomePrice ').val().replace(/[^0-9\.]+/, ""));
  var avg_comm = Number($('#inputCommission ').val().replace(/[^0-9\.]+/, ""));
  var avg_broker_fee = Number($('#inputBrokerFee ').val().replace(/[^0-9\.]+/, ""));
  var avg_age = Number($('#inputClientAge ').val().replace(/[^0-9\.]+/, ""));
  var avg_years = Number($('#inputYearsInHome ').val().replace(/[^0-9\.]+/, ""));
  var prob_repeat = Number($('#inputProbRepeat ').val().replace(/[^0-9\.]+/, ""));
  var referrals = Number($('#inputClientReferrals ').val().replace(/[^0-9\.]+/, ""));

  var commission = avg_price * (avg_comm/100) * ((100-avg_broker_fee)/100);
  var repeat_mult = (((75-avg_age)/avg_years)*(prob_repeat/100))+1;
  var referral_mult = repeat_mult * referrals;

  var lcv = commission * repeat_mult * referral_mult;

  $('#calculated-lcv').val("$"+Math.round(lcv));
})

$(document).ready(function() {
    var table = $('#transTable').DataTable({
        "scrollX": true,
        stateSave: true,
        lengthChange: false,
        buttons: [{
                    extend: 'print',
                    autoprint: false,
                },
                {
                    extend: 'pdfHtml5',
                    orientation: 'landscape',
                },
                'excel', 'colvis'],
        columnDefs: [{
            targets: [0],
            orderData: [0,1]
        }, {
            targets: [1],
            orderData: [1,0]
        }, {
            targets: [4],
            orderData: [4,0]
        }]
    });

    table.buttons().container().appendTo('#transTable_wrapper .col-md-6:eq(0)');
});

$('tbody tr').hover(function(){
  $(this).find('td').addClass('hovered');
}, function(){
  $(this).find('td').removeClass('hovered');
});
