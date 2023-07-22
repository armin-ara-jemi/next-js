import Image from 'next/image'
import "./globals.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHeart, faMagnifyingGlass, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
  <body>
    
    <header>
    <h1 class="logo">E-Shop</h1>
      
    <div class="bx bx-menu" id="menu-icon"></div>
    <ul class="navbar">
      <li><a href="#home">Home</a></li>
      <li><a href="#main">Main</a></li>
      <li><a href="#category">Category</a></li>
    </ul>
    <div class="navbar">
      <li><FontAwesomeIcon icon={faCartShopping} height={20} width={50} class="icon"/></li>
      <li><FontAwesomeIcon icon={faHeart} height={20} width={50} class="icon"/></li>
      </div>
    <div>
    <li class=""><input type="text" placeholder="Search.." name="search" class="sr-btn"
    
/>
    <button type="submit" class="btn">Search</button></li>
    </div>
    <div class="header-btn">
      <a href="signup.html" class="sign-up">Sign-up</a>
      <a href="signin.html" class="sign-in">Login</a>
      

    </div>
      
    </header>
    
 <section class="home" id="home">
    <div class="text">
      <h1><span>Looking to buy<br/>best quality product</span></h1>
      <p>In online shopping, it is easy to compare and research products and their prices. On shopping for appliances, we can find reviews, product comparisons, and compare the prices with the options available on the market. Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app.</p>

    </div>
    
  </section>
  <section class="main" id="main">
    <div class="heading">
      <span>How it's work</span>
      <h1>Order with 3 easy steps</h1>
    </div>
    <div class="ride-container">
      <div class="box">
      <FontAwesomeIcon icon={faMagnifyingGlass} class="bx" height={25} width={25}/>
        
        <h2>Do a web search for your item</h2>
        <p> One of the most effective ways to quickly find sites that are selling the product you want is to simply search for the product using a search engine like Google, Yahoo!, or Bing. If the product is popular, you will receive several pages of links to shops that offer it.At last we can say that online shopping is the best platform foe buying product</p>
      </div>
      <div class="box">
      <FontAwesomeIcon icon={faMagnifyingGlass} class="bx" height={25} width={25}/>
        <h2>Look for your product on E-Shop</h2>
        <p> Beyond selling products themselves, E-Shop acts as a liaison between you and a massive number of third-party vendors. The companies and people all use E-Shop as a way to list products and use the E-Shop payment system. This means E-Shop and its third-party vendors has one of the largest inventories available on the planet. Its easy for lookout.
        </p>
      </div>
      <div class="box">
      <FontAwesomeIcon icon={faMagnifyingGlass} class="bx" height={25} width={25}/>
      
        <h2>Use bkash and Nagad</h2>
        <p>You will have much more security if your account is compromised if you pay with a bkash and nagad. If you want you can also use a credit card instead of a debit card. You will have much more security if your account is compromised if you pay with a credit card instead of a debit card. This is because if your debit card information is stolen.</p>
      </div>
    </div>

  </section>
  <section class="category" id="category">
    <div class="heading">
      <span>Best Servces</span>
      <h1>Explore Out Top Deals <br/>From Top Rated Dealers</h1>
    </div>
    <div className="services-container">
      <div class="box">
        <div class="box-img">
        <Image
              src="/img-1.jpg"
              alt="pic"
              
              width={1000}
              height={700}
              priority
            />
        </div>
        <p>Shirt</p>
        <h3>Available For everyone</h3>
        <h2>$19.9</h2>
        <h2>Colors:Red, Blue, Green</h2>
        <h2>Size:Small, Blue, Green</h2>
        <a href="rent.html" class="btn"> Order Now</a>
      </div>

      <div class="box">
        <div class="box-img">
        <Image
              src="/img-2.jpg"
              alt="pic"
              
              width={1000}
              height={700}
              priority
            />
        </div>
        <p>Shirt</p>
        <h3>Available For everyone</h3>
        <h2>$19.9</h2>
        <h2>Colors:Red, Blue, Green</h2>
        <h2>Size:Small, Blue, Green</h2>
        <a href="rent.html" class="btn"> Order Now</a>
      </div>
      <div class="box">
        <div class="box-img">
        <Image
              src="/img-4.jpg"
              alt="pic"
              className="dark:invert"
              height={1000}
              width={700}
            />
        </div>
        <p>Shirt</p>
        <h3>Available For everyone</h3>
        <h2>$19.9</h2>
        <h2>Colors:Red, Blue, Green</h2>
        <h2>Size:Small, Blue, Green</h2>
        <a href="rent.html" class="btn"> Order Now</a>
      </div>
      </div>
      
       
    </section>
    
    
    <section class="reviews" id="reviews">
      <div class="heading">
        <span>Reviews</span>
        <h1>What's Our Customer Say</h1>
      </div>
      <div class="reviews-container">
        <div class="box">
          <div class="rev-img">
          <Image
              src="/pic1.jpg"
              alt="pic"
              width={70}
              height={10}
              priority
            />
          </div>
          <h2>User1</h2>
          <h2>Rating:4(out of 5)</h2>
          
          <p>COMMENT: Great product! Highly recommended.</p>
        </div>
        <div class="box">
          <div class="rev-img">
          <Image
              src="/pic2.jpg"
              alt="pic"
              
              width={70}
              height={10}
              priority
            />
          </div>
          <h2>User2</h2>
          <h2>Rating:5(out of 5)</h2>
          
          <p>COMMENT: Excellent quality and first shipping.</p>
        </div>
        <div class="box">
          <div class="rev-img">
          <Image
              src="/pic3.jpg"
              alt="pic"
              
              width={70}
              height={10}
              priority
            />
          </div>
          <h2>User3</h2>
          <h2>Rating:3(out of 5)</h2>
          
          <p>COMMENT: Average product. Could be better.</p>
        </div>
      </div>

    </section>
    <div class="copyright">
      <p>©All Right Reserved</p>
    </div>
    
  </body>      
    
  )
}
