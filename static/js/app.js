var tableData = data;

var $tbody = document.querySelector('tbody');
var $stateInput = document.querySelector('#state');
var $searchBtn = document.querySelector('#search');

$searchBtn.addEventListener('click', handleSearchButtonClick);

var filteredAddresses = addressData;

function renderTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < filteredAddresses.length; i++) {
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  }

  function handleSearchButtonClick() {
    var filterState = $stateInput.value.trim().toLowerCase();
    filteredAddresses = addressData.filter(function(address) {
      var addressState = address.state.toLowerCase();
      return addressState === filterState;
    });

    renderTable();
    };

    function handleResetButtonClick() {
      filteredAddresses = addressData;
      $cityInput.value = '';
      $stateInput.value = '';
      renderTable();
    };
  
  renderTable();
