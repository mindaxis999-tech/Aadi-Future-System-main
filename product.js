const categoryDisplayNames = {
  massage: "Massage Chair",
  leg: "Leg Massager",
  other: "Other Massager"
};

const products = {
      massage: [
        {
          image: "ProductImages/Royal_Comfort_Massage_Chair/royal_comfort_full_body_massage_chair.png",
          subtitle: "Massage Chair",
          title: "Royal Comfort Full Body Massage Chair",
          link: "royal-comfort-full-body-massage-chair-supplier.html"
        },
        {
          image: "ProductImages/Grand_Serenity_FullBody_Massage_Chair/grand_serenity_full_body_massage_chair.webp",
          subtitle: "Massage Chair",
          title: "Grand Serenity Full Body Massage Chair",
          link: "grand-serenity-full-body-massage-chair-supplier.html"
        },
        {
          image: "ProductImages/Aura_Comfort_Massage_Chair/aura_comfort_full_body_massage_chair.webp",
          subtitle: "Massage Chair",
          title: "Aura Comfort Full Body Massage Chair",
          link: "aura-comfort-full-body-massage-chair-supplier.html"
        },
        {
          image: "ProductImages/Highland_Bliss_Massage_Chair/highland_bliss_full_body_massage_chair.png",
          subtitle: "Massage Chair",
          title: "Highland Bliss Full Body Massage Chair",
          link: "highland-bliss-full-body-massage-chair-supplier.html"
        },
        {
          image: "ProductImages/Imperial_Supreme_Massage_Chair/imperial_supreme_luxury_full_body_massage_chair.png",
          subtitle: "Massage Chair",
          title: "Imperial Supreme Luxury Massage Chair",
          link: "imperial-supreme-luxury-full-body-massage-chair-supplier.html"
        },
        {
          image: "ProductImages/Maestro_Platinum_FullBody_Massage_Chair/maestro_platinum_full_body_massage_chair.png",
          subtitle: "Massage Chair",
          title: "Maestro Platinum Full Body Massage Chair",
          link: "maestro-platinum-full-body-massage-chair-supplier.html"
        },
        {
          image: "ProductImages/Grand_Aura_Massage_Chair/grand_aura_full_body_massage_chair.png",
          subtitle: "Massage Chair",
          title: "Grand Aura Full Body Massage Chair",
          link: "grand-aura-full-body-massage-chair-supplier.html"
        },
      ],
      leg: [
        {
          image: "ProductImages/Reflex_Swing_ProLegMassager/leg_harmony_leg_massager.webp",
          subtitle: "Leg Massager",
          title: "Leg Harmony Leg Massager",
          link: "leg-harmony-leg-massager-supplier.html"
        },
        {
          image: "ProductImages/Reflex_Swing_U_ComfortFootMassager/leg_harmony_u_comfort_leg_massager.webp",
          subtitle: "Leg Massager",
          title: "Leg Harmony U Comfort Leg Massager",
          link: "leg-harmony-u-comfort-leg-massager-supplier.html"
        },
        {
          image: "ProductImages/Leg_And_FootMassager/foot_and_leg_revive_massager.webp",
          subtitle: "Leg Massager",
          title: "Foot & Leg Revive Massager",
          link: "foot-leg-revive-massager-supplier.html"
        }
      ],
      other: [
        {
          image: "New_product_img/kansya_2_wati_foot_massager.jpg",
          subtitle: "Foot Massager",
          title: "Kansya 2 Wati Foot Massager",
          link: "kansya-2-wati-foot-massager-supplier.html"
        },
        {
          image: "New_product_img/massage_chair_protective_cover.jpg",
          subtitle: "Other Massager",
          title: "Massage Chair Protective Cover",
          link: "massage-chair-protective-cover-supplier.html"
        },
        {
          image: "ProductImages/Dancing_Queen/vibration_massager_plate_machine.webp",
          subtitle: "Other Massager",
          title: "Vibration Massager Plate / Machine (Dancing Queen Waver)",
          link: "dancing-queen-whole-body-vibration-machine-supplier.html"
        },
        {
          image: "ProductImages/Knee_Lover_Massager/knee_lover_massager.webp",
          subtitle: "Other Massager",
          title: "Knee Lover Massager",
          link: "knee-lover-massager-supplier.html"
        },
        {
          image: "New_product_img/eye_massager.jpg",
          subtitle: "Other Massager",
          title: "Eye Massager",
          link: "eye-massager-supplier.html"
        },
        {
          image: "New_product_img/fascia_gun_massager.jpg",
          subtitle: "Gun Massage",
          title: "Fascia Gun Massager",
          link: "fascia-gun-massager-supplier.html"
        },
        {
          image: "ProductImages/Tens_Massager/tens_therapy_massager.webp",
          subtitle: "Other Massager",
          title: "TENS Therapy Massager",
          link: "tens-therapy-massager-supplier.html"
        },
        {
          image: "New_product_img/gym_whole_body_vibration_machine.jpg",
          subtitle: "Exercise Machine",
          title: "Gym Whole Body Vibration Machine",
          link: "gym-whole-body-vibration-machine-supplier.html"
        },
        {
          image: "ProductImages/Tepid_BackMassager/tepid_heated_back_massager.webp",
          subtitle: "Back Massager",
          title: "Tepid / Heated Back Massager",
          link: "tepid-heated-back-massager-supplier.html"
        },
        {
          image: "New_product_img/u_shaped_body_massage_gun.jpg",
          subtitle: "Massage Gun",
          title: "U Shaped Body Massage Gun",
          link: "u-shaped-body-massage-gun-supplier.html"
        }
      ]
    };

function updateBreadcrumb(category) {
  const breadcrumb = document.querySelector('.site-breadcrumb ol');
  const categoryName = categoryDisplayNames[category] || 'Massage Chair'; // Default to Massage Chair
  if (breadcrumb) {
    breadcrumb.innerHTML = `<li><a href="index.html">Home</a></li><li aria-current="page">${categoryName}</li>`;
  }
}

function showProducts(category, element) {
      if (!products[category]) category = 'massage';
      document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
      if (element) element.classList.add('active');
      updateBreadcrumb(category);
      const container = document.getElementById('productContainer');
      if (!container) return;
      container.innerHTML = "";

      products[category].forEach(product => {
        const card = `
          <div class="product-card">
            <div class="product-image">
              <img src="${product.image}" alt="${product.title}" title="${product.title}">
            </div>
            <div class="product-info">
              <div class="title">${product.title}</div>
              <a href="${product.link}" class="read-more">Read More</a>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    }

// Read URL query string and set default tab
    window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category') || 'massage';
      const safeCategory = products[category] ? category : 'massage';
      const tabButton = Array.from(document.querySelectorAll('.tab-buttons button'))
        .find(btn => btn.textContent.toLowerCase().includes(safeCategory));
      showProducts(safeCategory, tabButton);

       // scroll exact section par
  const section = document.getElementById(safeCategory + "-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
    };
