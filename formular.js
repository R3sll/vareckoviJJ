
// čeká, až se načte celý dokument
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    // sekce dopravy
    const doprava = document.querySelectorAll('input[name="doprava[]"]:checked');
    // sekce přespání
    const prespani = document.querySelectorAll('input[name="prespani[]"]:checked');

    if (doprava.length === 0) {
      alert("Vyberte alespoň jeden způsob dopravy.");
      e.preventDefault();
      return;
    }

    if (prespani.length === 0) {
      alert("Vyberte alespoň jednu možnost přespání.");
      e.preventDefault();
      return;
    }
  });

  // aktivace textového pole pro "Jiné" v dopravě
  const dopravaJineCheckbox = document.getElementById("doprava_jine");
  const dopravaJineText = document.getElementById("doprava_jine_text");

  if (dopravaJineCheckbox && dopravaJineText) {
    dopravaJineCheckbox.addEventListener("change", function() {
      dopravaJineText.disabled = !this.checked;
    });
  }

  // aktivace textového pole pro "Jiné" u přespání
  const prespaniJineCheckbox = document.getElementById("prespani_jine");
  const prespaniJineText = document.getElementById("prespani_jine_text");

  if (prespaniJineCheckbox && prespaniJineText) {
    prespaniJineCheckbox.addEventListener("change", function() {
      prespaniJineText.disabled = !this.checked;
    });
  }
});