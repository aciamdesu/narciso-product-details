import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [selectedSize, setselectedSize] = useState("30ml");
  const [selectedPrice, setselectedPrice] = useState("$60.99");

  return (
    <div>
      <Header />
      <div className="page-container">
        <NavBar />
        <hr className="divider" />
        <ProductOverview />
        <div className="body-container">
          <div className="prod-left">
            <ProductTitle />
            <ProductImg />
          </div>
          <div className="prod-right">
            <ProductInfo
              selectedSize={selectedSize}
              selectedPrice={selectedPrice}
            />
            <ProductOpt
              selectedSize={selectedSize}
              setselectedSize={setselectedSize}
              selectedPrice={selectedPrice}
              setselectedPrice={setselectedPrice}
            />
            <div className="buy-btn">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <p className="top-banner">Free domestic shipping on orders over $100</p>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Brands</a>
        </li>
        <li>
          <a href="#">Offers</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <div className="nav-icons">
        <img src="/search-btn.png" alt="Search" />
        <img src="/add-to-cart-btn.png" alt="Add to Cart" />
        <img src="/profile-btn.png" alt="Profile" />
      </div>
    </nav>
  );
}

function ProductOverview() {
  return (
    <div className="left-btn-content">
      <img className="left-btn" src="/arrow-left-btn.png" />
      <p>Back to search product</p>
    </div>
  );
}

function ProductTitle() {
  return (
    <div className="prod-title">
      <h4>[NARCISO]</h4>
      <h1>NARCISO Eau de Parfum Cristal</h1>

      <div className="ratings-info">
        <img className="rate-stars" src="/star-review.png" />
        <p>(12,344 customer reviews)</p>
      </div>
    </div>
  );
}

function ProductImg() {
  const preview = ["/narciso-2.jpg", "/narciso-3.jpg", "narciso-5.jpg"];
  const [mainImg, setmainImg] = useState("/narciso-1.jpg");

  return (
    <div className="prod-img">
      <div className="main-img">
        <img src={mainImg} alt="Narciso Perfume" />
      </div>

      <div className="preview-list">
        {preview.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Preview ${index + 1}`}
            onClick={() => setmainImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

function ProductInfo({ selectedSize, selectedPrice }) {
  return (
    <div className="prod-summary">
      <h2 className="prod-descript">Description</h2>
      <p>
        A captivating floral, woody musk fragrance that unveils the sensual,
        confident essence of femininity. This elegant scent opens with lush
        notes of gardenia and Bulgarian rose, offering a soft floral impression.
        At its heart lies Narciso's signature creamy musk, enveloping the senses
        in warmth and sophistication. The base is grounded by deep, earthy
        cedarwood and vetiver, creating a smooth, lingering trail that is both
        timeless and modern. A truly iconic fragrance that embodies grace,
        allure, and understated power.
      </p>
      <p className="prod-price">{selectedPrice}</p>
    </div>
  );
}

function ProductOpt({
  selectedSize,
  selectedPrice,
  setselectedSize,
  setselectedPrice,
}) {
  const [quantity, setQuantity] = useState(1);
  const sizes = [
    { size: "30ml", price: "$60.99" },
    { size: "50ml", price: "$87.99" },
    { size: "90ml", price: "$111.99" },
  ];

  return (
    <div className="prod-opt-content">
      <div className="prod-opt">
        <p>Size:</p>
        <div className="size-opt">
          {sizes.map(({ size, price }) => (
            <button
              key={size}
              className={`option-btn ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => {
                setselectedSize(size);
                setselectedPrice(price);
              }}
            >
              {" "}
              {size}{" "}
            </button>
          ))}
        </div>
      </div>

      <div className="quantity-selector">
        <p>Quantity:</p>

        <div className="quantity-controls">
          <span className="quantity-val">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="purchase-act">
      <button>Buy Product</button>
      <img className="cart-btn" src="/add-to-cart-btn.png" />
    </div>
  );
}

function Footer() {
  const [text, setText] = useState("");

  return (
    <div className="footer-content">
      <div className="footer-layout">
        <div className="footer-newsletter">
          <h1 className="hdr-big">
            Get updates on new <br /> products you probably <br /> want to know
            about <br /> in your inbox.
          </h1>

          <div className="footer-subscribe">
            <input
              type="text"
              id="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Please enter your email"
            />

            <div className="footer-submit">
              <img className="right-btn" src="/arrow-right-btn.png" />
            </div>
          </div>
        </div>

        <div className="links">
          <div className="footer-about">
            <p className="hdr-about">About Us</p>
            <a href="#">Our Story</a>
            <a href="#">Mission & Values</a>
            <a href="#">Sustainability Initiatives</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-support">
            <p className="hdr-support">Service</p>
            <a href="#">Contact Us</a>
            <a href="#">Help & FAQs</a>
            <a href="#">Order Tracking</a>
            <a href="#">Returns & Exchanges</a>
          </div>

          <div className="footer-product">
            <p className="hdr-product">Products</p>
            <a href="#">Skincare</a>
            <a href="#">Makeup</a>
            <a href="#">Collections</a>
            <a href="#">Bestsellers</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
