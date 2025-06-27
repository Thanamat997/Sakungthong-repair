document.getElementById("repairForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const image = formData.get("image");
  let imageBase64 = "";
  let imageType = "";
  if (image && image.size > 0) {
    const buffer = await image.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    imageBase64 = btoa(String.fromCharCode(...bytes));
    imageType = image.type;
  }

  const payload = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    room: formData.get("room"),
    problem: formData.get("problem"),
    details: formData.get("details"),
    available: formData.get("available"),
    image: imageBase64,
    imageType: imageType,
    userId: "",
    userName: ""
  };

  const res = await fetch("https://script.google.com/macros/s/AKfycbwjcVzsvP8XKckagR45E-sCOWCxZur6AwQ0_A28ADfjYh4MV2uRVvJezpIpjmwlBXbz/exec", {
    method: "POST",
    body: new URLSearchParams(payload),
  });

  if (res.ok) {
    alert("ส่งแจ้งซ่อมสำเร็จแล้ว!");
    form.reset();
  } else {
    alert("ส่งไม่สำเร็จ กรุณาลองอีกครั้ง");
  }
});
