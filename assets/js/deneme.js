// Kullanıcının ölçüleri
var measurements = {
    weight: 0,
    bodyFat: 0
  };
  
  // Formu işleme
  var form = document.getElementById("measurementsForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Formdaki verileri al
    var weight = document.getElementById("weight").value;
    var bodyFat = document.getElementById("bodyFat").value;
    
    // Verileri kontrol et ve kaydet
    if (weight && bodyFat) {
      measurements.weight = weight;
      measurements.bodyFat = bodyFat;
      
      // Başarı mesajı göster
      var successMessage = document.createElement("p");
      successMessage.innerText = "Ölçümler kaydedildi!";
      successMessage.style.color = "#8083FF";
      form.appendChild(successMessage);
    } else {
      // Hata mesajı göster
      var errorMessage = document.createElement("p");
      errorMessage.innerText = "Lütfen tüm alanları doldurun.";
      errorMessage.style.color = "red";
      form.appendChild(errorMessage);
    }
  });
  
  // Blog yazıları
  var blogPosts = [
    {
      title: "Neden spor yapmalıyız?",
      date: "01.01.2022",
      content: "Spor yapmanın faydaları saymakla bitmez. Hem fiziksel hem de mental sağlığımıza katkısı vardır."
    },
    {
      title: "Squat egzersizleri",
      date: "15.02.2022",
      content: "Squat, bacak kaslarımızı çalıştıran temel bir egzersizdir. Doğru formda yapılması önemlidir."
    },
    {
      title: "Beslenme önerileri",
      date: "30.03.2022",
      content: "Spor yaparken doğru beslenmek çok önemlidir. Protein, karbonhidrat ve yağ oranlarına dikkat edilmelidir."
    }
  ];
  
  // Blog yazılarını listeleme
  var blogList = document.getElementById("blogList");
  for (var i = 0; i < blogPosts.length; i++) {
    var post = blogPosts[i];
    
    // Blog yazısı öğesini oluşturma
    var postElement = document.createElement("li");
    
    var postLink = document.createElement("a");
    postLink.innerText = post.title;
    postLink.href = "#";
    
    var postDate = document.createElement("span");
    postDate.innerText = post.date;
    
    var postContent = document.createElement("p");
    postContent.innerText = post.content;
    
    // Blog yazısı öğesine alt öğeleri ekleme
    postElement.appendChild(postLink);
    postElement.appendChild(postDate);
    postElement.appendChild(postContent);
    
    // Blog listesine öğeyi ekleme
    blogList.appendChild(postElement);
  }
  