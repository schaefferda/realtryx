var counter = 1;
var limit = 25;
function addDataMapColumn(divName){
     if (counter == limit)  {
          alert("Maximum column limit of " + counter);
     }
     else {
          var newInput = document.createElement('div');
          var openDivHTML = "<div class='form-group row'>"
          var labelHTML = "<label class='col-sm-5 col-form-label' for='id_column_" + (counter + 1) + "'>Column " + (counter + 1) + "</label>";
          var openSelectHTML = "<div class='col-sm-7 col-form-label'><select name='column_" + (counter + 1) + "' class='form-control form-control-sm' id='id_column_" + (counter + 1) + "'>";
          var optionDefaultHTML = "<option value='...'>...</option>";
          var option1HTML = "<option value='mls_nbr'>MLS Number</option>";
          var option2HTML = "<option value='trans_type'>Transaction Type</option>";
          var option3HTML = "<option value='address'>Street Address</option>";
          var option4HTML = "<option value='city'>City</option>";
          var option5HTML = "<option value='county'>County</option>";
          var option6HTML = "<option value='state'>State (2 Letter Abbr)</option>";
          var option7HTML = "<option value='zip'>Zipcode</option>";
          var option8HTML = "<option value='list_date'>List Date</option>";
          var option9HTML = "<option value='contract_date'>Contract Date</option>";
          var option10HTML = "<option value='date_sold'>Sold Date</option>";
          var option11HTML = "<option value='ol_price'>Original List Price</option>";
          var option12HTML = "<option value='contract_price'>Contract Price</option>";
          var option13HTML = "<option value='sold_price'>Sold Price</option>";
          var option14HTML = "<option value='comm_rate'>Commission Rate</option>";
          var option15HTML = "<option value='comm_type'>Commission Type</option>";
          var option16HTML = "<option value='concessions'>Concessions</option>";
          var option17HTML = "<option value='bonus'>Bonus</option>";
          var option18HTML = "<option value='cdom'>Consecutive DOM</option>";
          var option19HTML = "<option value='appraisal'>Appraisal Value</option>";
          var option20HTML = "<option value='source'>Lead Source</option>";
          var option21HTML = "<option value='status'>Transaction Status</option>";
          var option22HTML = "<option value='terms'>Sold Terms</option>";
          var option23HTML = "<option value='lender'>Lender</option>";
          var option24HTML = "<option value='title'>Title Company</option>";
          var option25HTML = "<option value='entry_date'>Entry Date</option>";
          var closeSelectHTML = "</select></div>"
          var closeDivHTML = "</div>"
          newInput.innerHTML = openDivHTML + labelHTML + openSelectHTML + optionDefaultHTML + option1HTML + option2HTML + option3HTML + option4HTML + option5HTML + option6HTML + option7HTML + option8HTML + option9HTML + option10HTML + option11HTML + option12HTML + option13HTML + option14HTML + option15HTML + option16HTML + option17HTML + option18HTML + option19HTML + option20HTML + option21HTML + option22HTML + option23HTML + option24HTML + option25HTML + closeSelectHTML + closeDivHTML;
          document.getElementById(divName).appendChild(newInput);
          counter++;
     }
}
