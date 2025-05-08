const cards = [
    {
      title: "Health and Medical Sciences",
      description: "รวมพอร์ตคณะแพทย์ พยาบาล ทันตะ เภสัช และอื่นๆ",
      image: "images/health.jpg",
      link: "portfolio/health.html"
    },
    {
      title: "Engineering and Technology",
      description: "รวมพอร์ตวิศวะ คอม ไอที วิทยาการข้อมูล และอื่นๆ",
      image: "images/tech.jpg",
      link: "portfolio/tech.html"
    },
    {
      title: "Arts and<br> Humanities",
      description: "รวมพอร์ตนิเทศ ศิลปกรรม ออกแบบ ภาษาศาสตร์ และอื่นๆ",
      image: "images/art.jpg",
      link: "portfolio/art.html"
    }
  ];
  
  const container = document.getElementById("cardContainer");

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <div class="card-content">
      <h2>${card.title}</h2>
      <p>${card.description}</p>
      <a href="${card.link}" class="btn">ดูพอร์ต</a>
    </div>
  `;
  container.appendChild(div);
});
  