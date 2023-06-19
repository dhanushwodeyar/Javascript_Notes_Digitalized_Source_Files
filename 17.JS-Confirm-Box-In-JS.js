function confirmbox() {
    var res = confirm("Are u Sure Do you want to allow the alert message");
    if (res) {
      alert("This message is displayed since you confirmd to allow " + res);
    } else {
      alert(
        "This message is displayed since you are not confirmd to allow " + res
      );
    }
}
