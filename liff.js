liff.init({ liffId: "2007625708-loPNM698" })
  .then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      liff.getProfile().then(profile => {
        document.getElementById('name').value = profile.displayName;
      });
    }
  })
  .catch(err => console.error(err));