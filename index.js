
var xhr = new XMLHttpRequest();
xhr.open("GET", "rockbands.json", true);
xhr.send();
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var bands = JSON.parse(xhr.responseText);

    var bandSelect = document.getElementById("band-select");
    var artistSelect = document.getElementById("artist-select");

    for (var band in bands) {
      var option = document.createElement("option");
      option.value = band;
      option.textContent = band;
      bandSelect.appendChild(option);
    }

    bandSelect.addEventListener('change', function() {
      artistSelect.innerHTML = '<option value="">--Select an artist--</option>';
      artistSelect.disabled = true;
      console.log(artistSelect);
      var selectedBand = bandSelect.value;
      if (selectedBand) {
        var artists = bands[selectedBand];

        artists.forEach(function(artist) {
          var option = document.createElement('option');
          option.value = artist.value;
          option.textContent = artist.name;
          artistSelect.appendChild(option);
        });
        artistSelect.disabled = false;
      }
    });

    artistSelect.addEventListener('change', function() {
      var selectedArtistLink = artistSelect.value;
      if (selectedArtistLink) {
        window.open(selectedArtistLink, '_blank');
      }
    });
  }
});
