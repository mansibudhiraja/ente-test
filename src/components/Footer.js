import React from 'react'
import EnteAppsImage from "../images/apps.png"
import AppStoreBadge from "../images/app_store_badge.svg"
import PlayStore from "../images/play_store.png"
import WebLink from "../images/web.svg"
import {Link} from 'gatsby'


const Footer = () => {
return (
<div>
    <div className="hue">
      <div className="download-section">
        <div className="container">
          <div id="download" className="row align-items-center">
            <div className="col-auto order-lg-first order-first">
                <img className="img-fluid apps-image" src={EnteAppsImage} alt="Ente web screenshot" />
            </div>
            <div className="col-auto app-icons">
              <div>
                <a className="nostyle" href="https://play.google.com/store/apps/details?id=io.ente.photos">
                  <img src={PlayStore} alt="ente - play store" style={{width: "197px"}}/></a>
              </div>
              <div className="app-link">
                <a className="nostyle" href="https://apps.apple.com/in/app/ente-photos/id1542026904 ">
                  <img src={AppStoreBadge} style={{width: "197px", height: "67px"}} alt="ente - ios app store" /></a>
              </div>
              <div className="app-link">
                <a className="nostyle" href="https://web.ente.io">
                  <img src={WebLink} alt="ente - web-app link" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container reviews-container">
          <div className="col-md-12 text-center">
            <div className="footer-heading">
              user reviews
            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="row">
                  <div className="col-md-12">
                    <div className="carousel-inner text-center">
                      <div className="carousel-item active w-100">
                        <h4 className="review-font">"been on the lookout for a privacy friendly photo sync &
                            backup solution, ente delivers"</h4><br />
                        <p>chaitanya pramod<br/><br/>
                            <img src="https://play-lh.googleusercontent.com/a-/AOh14GjtRnAmE8ldGN0xMzTgAgrTy94G69vQxBtOsJRHeuk=w48-h48-n-rw"
                                  srcSet="https://play-lh.googleusercontent.com/a-/AOh14GjtRnAmE8ldGN0xMzTgAgrTy94G69vQxBtOsJRHeuk=w96-h96-n-rw 2x"
                                  className="T75of ZqMJr reviews-user-circle" alt="User review" aria-hidden="true" data-atf="true" data-iml="774840.0899999979" />
                        </p>
                      </div>
                      <div className="carousel-item">
                        <h4 className="review-font">"Really well executed product. one more step away from
                            the Google ecosystem"</h4><br />
                        <p>setal Patel<br/><br/>
                          <img src="https://play-lh.googleusercontent.com/a/AATXAJyM4_7g7Xegl14BYwVJWbgYkri4b2Q5gyhc_wE=w48-h48-n-rw-mo"
                                srcSet="https://play-lh.googleusercontent.com/a/AATXAJyM4_7g7Xegl14BYwVJWbgYkri4b2Q5gyhc_wE=w96-h96-n-rw-mo 2x"
                                className="T75of ZqMJr reviews-user-circle" aria-hidden="true" alt="User review" data-atf="true" data-iml="774840.1699999959" />
                        </p>
                      </div>
                      <div className="carousel-item">
                        <h4 className="review-font">"very clear UX, super smooth and privacy first alternative to google photos"</h4><br/>
                        <p>nikhil jindal<br/><br/>
                          <img src="https://play-lh.googleusercontent.com/a-/AOh14Gi7AgmmshvZ3AvOBRc9TSHqbgSqkAFmBoHN5mo8=w48-h48-n-rw"
                                srcSet="https://play-lh.googleusercontent.com/a/AATXAJyM4_7g7Xegl14BYwVJWbgYkri4b2Q5gyhc_wE=w96-h96-n-rw-mo 2x"
                                className="T75of ZqMJr reviews-user-circle" aria-hidden="true" alt="User review" data-atf="true" data-iml="774840.1699999959" />
                        </p>
                      </div>
                      {/* <!-- <div className="carousel-item">
                          <h4 className="review-font">"ente (Malayalam) means mine, if you're looking for meaning in reviews. if you're looking for privacy use ente"</h4><br>
                          <p>abhijeet bisht<br><br>
                          <img src="https://play-lh.googleusercontent.com/a-/AOh14GgN2E1BepTSKaIdrKTga_EMSZmu-Jbv-0m07wmfDQ=w48-h48-n-rw" srcSet="https://play-lh.googleusercontent.com/a/AATXAJyM4_7g7Xegl14BYwVJWbgYkri4b2Q5gyhc_wE=w96-h96-n-rw-mo 2x" 
                          className="T75of ZqMJr reviews-user-circle" alt="User review" aria-hidden="true" data-atf="true" data-iml="774840.1699999959"></p>
                      </div> --></br> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a className="carousel-control-prev" href="#carouselExampleInterval" 
                          role="button" data-slide="prev" style={{float: "left"}} >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button"
                        data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">next</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="green-separator">
    </div>
    <div className="container footer-section">
      <div className="row">
          <div className="col" style={{marginRight: "40px", minWidth: "300px", color: "#66FF91"}} >
            <svg width="64px" height="20" viewBox="0 0 652 191" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M158.192 111.968C158.192 114.464 158 118.016 157.616 122.624H36.944C39.056 133.952 44.528 142.976 53.36 149.696C62.384 156.224 73.52 159.488 86.768 159.488C103.664 159.488 117.584 153.92 128.528 142.784L147.824 164.96C140.912 173.216 132.176 179.456 121.616 183.68C111.056 187.904 99.152 190.016 85.904 190.016C69.008 190.016 54.128 186.656 41.264 179.936C28.4 173.216 18.416 163.904 11.312 152C4.39997 139.904 0.94397 126.272 0.94397 111.104C0.94397 96.128 4.30397 82.688 11.024 70.784C17.936 58.688 27.44 49.28 39.536 42.56C51.632 35.84 65.264 32.48 80.432 32.48C95.408 32.48 108.752 35.84 120.464 42.56C132.368 49.088 141.584 58.4 148.112 70.496C154.832 82.4 158.192 96.224 158.192 111.968ZM80.432 61.28C68.912 61.28 59.12 64.736 51.056 71.648C43.184 78.368 38.384 87.392 36.656 98.72H123.92C122.384 87.584 117.68 78.56 109.808 71.648C101.936 64.736 92.144 61.28 80.432 61.28Z" />
              <path
                  d="M280.036 32.48C299.428 32.48 314.98 38.144 326.692 49.472C338.404 60.8 344.26 77.6 344.26 99.872V188H308.26V104.48C308.26 91.04 305.092 80.96 298.756 74.24C292.42 67.328 283.396 63.872 271.684 63.872C258.436 63.872 247.972 67.904 240.292 75.968C232.612 83.84 228.772 95.264 228.772 110.24V188H192.772V34.208H227.044V54.08C232.996 46.976 240.484 41.6 249.508 37.952C258.532 34.304 268.708 32.48 280.036 32.48Z" />
              <path
                  d="M482.376 179.648C478.152 183.104 472.968 185.696 466.824 187.424C460.872 189.152 454.536 190.016 447.816 190.016C430.92 190.016 417.864 185.6 408.648 176.768C399.432 167.936 394.824 155.072 394.824 138.176V64.16H369.48V35.36H394.824V0.223999H430.824V35.36H472.008V64.16H430.824V137.312C430.824 144.8 432.648 150.56 436.296 154.592C439.944 158.432 445.224 160.352 452.136 160.352C460.2 160.352 466.92 158.24 472.296 154.016L482.376 179.648Z" />
              <path
                  d="M651.505 111.968C651.505 114.464 651.312 118.016 650.928 122.624H530.256C532.368 133.952 537.84 142.976 546.672 149.696C555.696 156.224 566.832 159.488 580.08 159.488C596.976 159.488 610.896 153.92 621.84 142.784L641.136 164.96C634.224 173.216 625.488 179.456 614.928 183.68C604.368 187.904 592.464 190.016 579.216 190.016C562.32 190.016 547.44 186.656 534.576 179.936C521.712 173.216 511.728 163.904 504.624 152C497.712 139.904 494.256 126.272 494.256 111.104C494.256 96.128 497.616 82.688 504.336 70.784C511.248 58.688 520.753 49.28 532.849 42.56C544.945 35.84 558.577 32.48 573.745 32.48C588.721 32.48 602.064 35.84 613.776 42.56C625.68 49.088 634.896 58.4 641.424 70.496C648.144 82.4 651.505 96.224 651.505 111.968ZM573.745 61.28C562.225 61.28 552.433 64.736 544.369 71.648C536.497 78.368 531.697 87.392 529.969 98.72H617.232C615.696 87.584 610.992 78.56 603.12 71.648C595.248 64.736 585.457 61.28 573.745 61.28Z" />
            </svg>
            <div className="app-description">
                ente is a cloud based mobile and desktop photo storage app with a focus on security and privacy.
            </div>        
          </div>
          <div className="col">
              <div className="footer-heading">
                About
              </div>
              <div className="footer-link">
                  <Link className="nostyle" to="/faq">faq</Link>
              </div>
              <div className="footer-link">
                  <Link className="nostyle" to="/privacy">privacy</Link>
              </div>
              <div className="footer-link">
                  <Link className="nostyle" to="/terms">terms</Link>
              </div>
              <div className="footer-link ">
                  <Link className="nostyle" to="/transparency">transparency</Link>
              </div>
            </div>
            <div className="col">
              <div className="footer-heading">
                Apps
              </div>
              <div className="footer-link">
                 <a className="nostyle" href="https://play.google.com/store/apps/details?id=io.ente.photos">android</a>
              </div>
              <div className="footer-link">
                <a className="nostyle" href="https://apps.apple.com/in/app/ente-photos/id1542026904">ios</a>
              </div>
              <div className="footer-link ">
                <a className="nostyle " href="https://web.ente.io">web</a>
              </div>
            </div>
            <div className="col">
              <div className="footer-heading">
                  source code
              </div>
              <div className="footer-link">
                 <a className="nostyle" href="https://github.com/ente-io/frame">mobile</a>
              </div>
              <div className="footer-link">
                <a className="nostyle" href="https://github.com/ente-io/bada-frame">desktop</a>
              </div>
            </div>
            <div className="col">
              <div className="footer-heading">
                  contact
              </div>
              <div className="footer-link">
                 <a className="nostyle" href="mailto:contact@ente.io">contact@ente.io</a>
                 <div className="grey-separator"></div>
                 <div style={{fontSize: 14}}>H1304, PFS, Old Airport Road, Bengaluru, India</div>
                 <div className="grey-separator"></div>
                 <div style={{fontSize: 14}} >Denemarkenstraat 90, 2034 AD, Haarlem, Netherlands</div>
              </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Footer;