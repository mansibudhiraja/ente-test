import React from 'react'
import EnteAppsImage from "../images/apps.png"
import AppStoreBadge from "../images/app_store_badge.svg"
import PlayStore from "../images/play_store.png"
import WebSvg from "../components/icons/WebSvg"
import {Link} from 'gatsby'
import EnteSvg from './icons/EnteSvg'
import styled from 'styled-components'

const Address = styled.div`
    font-size: 14px;
`;

const EnteLogo = styled.div`
    margin-right: 40px;
    min-width: 300px;
    color: #66FF91;
`;

const DownloadSection =styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  mix-blend-mode: normal;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media only screen and (min-width: 768px) {
    padding-top: 200px;
    padding-bottom: 150px;
  }
`;

const FooterSection = styled.div`
  margin-top: 60px;
  margin-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;
`;

const FooterLink = styled.div`
  color: #B1B2B3;
  font-size: 16px;
  line-height: 30px;
`;

const FooterHeading = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #FFFFFF;
  margin-top: 32px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

const Footer = () => {
return (
<div>
    <div className="hue">
      <DownloadSection>
        <div className="container">
          <div id="download" className="row align-items-center">
            <div className="col-auto order-lg-first order-first">
                <img className="img-fluid apps-image" src={EnteAppsImage} alt="Ente web screenshot" />
            </div>
            <div className="col-auto app-icons">
              <div>
                <a className="nostyle" href="https://play.google.com/store/apps/details?id=io.ente.photos" target="_blank" rel="noreferrer noopener">
                  <img src={PlayStore} alt="ente - play store" style={{width: "197px"}}/></a>
              </div>
              <div className="app-link">
                <a className="nostyle" href="https://apps.apple.com/in/app/ente-photos/id1542026904 "  target="_blank" rel="noreferrer noopener">
                  <img src={AppStoreBadge} style={{width: "197px", height: "67px"}} alt="ente - ios app store" /></a>
              </div>
              <div className="app-link">
                <a className="nostyle" href="https://web.ente.io" target="_blank" rel="noreferrer noopener">
                  <WebSvg width={"197"} height={"59"} alt="ente - web-app link" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container reviews-container">
          <div className="col-md-12 text-center">
            <FooterHeading>
              user reviews
            </FooterHeading>
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
      </DownloadSection>
    </div>
    <div className="green-separator">
    </div>
    <FooterSection className="container">
      <div className="row">
          <EnteLogo className="col">
          <EnteSvg width="64px" height="20" />
            <div className="app-description">
                ente is a cloud based mobile and desktop photo storage app with a focus on security and privacy.
            </div>        
          </EnteLogo>
          <div className="col">
              <FooterHeading>
                about
              </FooterHeading>
              <FooterLink>
                  <Link className="nostyle" to="/faq">faq</Link>
              </FooterLink>
              <FooterLink>
                  <Link className="nostyle" to="/privacy">privacy</Link>
              </FooterLink>
              <FooterLink>
                  <Link className="nostyle" to="/terms">terms</Link>
              </FooterLink>
              <FooterLink>
                  <Link className="nostyle" to="/transparency">transparency</Link>
              </FooterLink>
            </div>
            <div className="col">
              <FooterHeading>
                apps
              </FooterHeading>
              <FooterLink>
                 <a className="nostyle" href="https://play.google.com/store/apps/details?id=io.ente.photos" target="_blank" rel="noreferrer noopener">android</a>
              </FooterLink>
              <FooterLink>
                <a className="nostyle" href="https://apps.apple.com/in/app/ente-photos/id1542026904" target="_blank" rel="noreferrer noopener">ios</a>
              </FooterLink>
              <FooterLink>
                <a className="nostyle " href="https://web.ente.io" target="_blank" rel="noreferrer noopener">web</a>
              </FooterLink>
            </div>
            <div className="col">
              <FooterHeading>
                  source code
              </FooterHeading>
              <FooterLink>
                 <a className="nostyle" href="https://github.com/ente-io/frame" target="_blank" rel="noreferrer noopener">mobile</a>
              </FooterLink>
              <FooterLink>
                <a className="nostyle" href="https://github.com/ente-io/bada-frame" target="_blank" rel="noreferrer noopener">desktop</a>
              </FooterLink>
            </div>
            <div className="col">
              <FooterHeading>
                  contact
              </FooterHeading>
              <FooterLink>
                 <a className="nostyle" href="mailto:contact@ente.io">contact@ente.io</a>
                 <div className="grey-separator"></div>
                 <Address>H1304, PFS, Old Airport Road, Bengaluru, India</Address>
                 <div className="grey-separator"></div>
                 <Address >Denemarkenstraat 90, 2034 AD, Haarlem, Netherlands</Address>
              </FooterLink>
            </div>
        </div>
    </FooterSection>
</div>
)
}

export default Footer;