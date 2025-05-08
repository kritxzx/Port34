const portfolios = [
  {
    name: "Ong Film Kmilt",
    university: "คณะสถาปัตยกรรม ศิลปะและการออกแบบ ภาพยนตร์และภาพนิ่ง ของ ลาดกระบัง",
    description: "ก็คือฟิล์มลาดบังจะอยู่ในคณะสถาปัตย์แต่เป็น สถาปัตย์นิเทศศิลป์ไรงี้ ของพี่ก็จะเป็นหลักสูตรภาพยนตร์ก็จะเรียนเป็นพวกศิลปะ การทำหนัง พอร์ตก็จะมีโจทย์ให้ด้วยนะ พวกคณะสถาปัตย์จะมีโจทย์กันแทบทุกม.ทุกสาขาเลย แปลว่าไร แปลว่าทำงานเยอะตั้งแต่ยื่นพอร์ตแล้ว555555 พอร์ตก็จะเป็นงานเส้นสถาปัตย์ ภาพวาด ภาพยนตร์สั้น หรือคลิปวีดิโอต่างๆ พูดง่ายๆคืออยากเรียนฟิล์มลาดบังต้องชอบวาดรูประดับนึง แต่เหมือนตอนยื่นพอร์ต น้ำหนักคะแนนของภาพวาดไม่ได้เยอะขนาดนั้น เอาแค่วาดรู้เรื่องก็พอแล้ว ไม่ต้องซีเรียส แต่ถ้าติดเข้ามาเรียน ตามหลักสูตร มีเรียนศิลปะนะ<br>ปรึกษาพี่เรื่องคณะ การเตรียมตัว การสัมภาษณ์ ที่เกี่ยวกับ นิเทศ สถาปัตยกรรม กับ ภาพยนตร์ ได้เลยนะครับ",
    image: "../images/Ong.jpg",
    instagram: "https://www.instagram.com/rnnkry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    name: "Theme MUMS MU",
    university: "วิทยาลัยดุริยาคศิลป์ สาขาเทคโนโลยีดนตรี เอก VOICE มหาวิทยาลัยมหิดล",
    description: "พี่เริ่มเตรียมตัวตั้งเเต่ม.6เทอม1 เพราะพี่ก้เพิ่งหาตัวเองเจอ (เเต่ก้อย่าทำตามนะ 😂)<br>พี่สอบเข้าในรอบ 2 เดือนธันวาคม (ไม่ได้เกี่ยวข้องกับtcas)<br>สิ่งที่จะต้องใช้ในการสอบเข้ามีอยู่ 2 อย่าง<br>1.การสอบ TIME<br>2.การสอบปฏิบัติ<br>คณะจะแบ่งออกเป็น 9 สาขา<br>Perform<br>1. ปฏิบัติดนตรีคลาสสิก (Classical Music Performance)<br>2. ดนตรีแจ๊ส (Jazz)<br>3. ดนตรีสมัยนิยม (Popular Music)<br>4. ละครเพลง (Musical Theatre)<br>5. ดนตรีไทยและดนตรีตะวันออก (Thai and Eastern Music)<br>Non-perform<br>6. การประพันธ์ดนตรี (Music Composition)<br>7. ธุรกิจดนตรี (Music Business)<br>8. ดนตรีศึกษาและการสอน (Music Education and Pedagogy)<br>9. เทคโนโลยีดนตรี (Music Technology)<br>ในคณะมีสาขาให้เลือกหลายทาง ทำงานได้หลายสายไม่ว่าจะหน้าหรือหลังstageในห้องอัดเเละอีกหลายๆอย่าง มีทั้งคนไทยเเละคนต่างชาติ(หนักไปทางจีน)ในคณะมีกิจกรรมให้ทำหลายอย่างมาก เช่น การทำคอนเสิร์ตเป็นของตัวเอง<br>ถ้ามีอะไรสงสัยก้DMมาหรือจะถามในกลุ่มก้ได้เลย",
    image: "../images/Theme.jpg",
    instagram: "https://www.instagram.com/_thxme_s?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    name: "Peem Cosci swu",
    university: "ภาพยนตร์และสื่อดิจิทัล swu",
    description: "ภีมยื่นเอกออกแบบไป ในพอรตอาจจะไม่จำเป็นต้องมีผลงานเกี่ยวกับภาพยนต์มาก แต่ต้องเป็นผลงานที่ออกแนว ออกแบบ หรือว่าใช้ความคิดสร้างสรรค์หน่อย เพราะเราเข้าเอกออกแบบเนาะ ของภีมก็ไม่ได้มีงานทำหนังเยอะ แต่ก็ใส่พวก ออกแบบกราฟฟิค หรือว่า ดรออิ้ง(ที่มันแสดงถึงความสร้างสรรค์) (เขาบอกมาว่า มศว จะชอบคนแบบ ติสท์ๆ เฟี้ยวๆ มีความเป็นตัวเองสูง แนวชัดเจนอะไรงี้ครับ)",
    image: "../images/Peem.jpg",
    instagram: "https://www.instagram.com/poex.e?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  }
];

const container = document.getElementById("cardContainer");

portfolios.forEach(port => {
  const card = document.createElement("div");
  card.className = "horizontal-card";
  card.innerHTML = `
    <img src="${port.image}" alt="${port.name}">
    <div class="card-details">
      <h3>${port.name}</h3>
      <p><strong>คณะที่ยื่น:</strong> ${port.university}</p>
      <p>${port.description}</p>
      <p><a href="${port.instagram}" target="_blank" style="color:#1da1f2;">Instagram</a></p>
    </div>
  `;
  container.appendChild(card);
});
