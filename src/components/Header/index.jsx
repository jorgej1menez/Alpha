import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';
import PropTypes from 'prop-types';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  Header.propTypes = {
    variant: PropTypes.string,
  };
  

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="" alt="ALPHATECH" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item-has-children">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Inicio
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/" onClick={() => setMobileToggle(false)}>
                              Principal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                             Agencia de Fotografia 
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portafolio Creativo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Agencia Digital
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Agencia de Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Nuestro Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Experiencias
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        Nosotros
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Servicios
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Servicios
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Nuestros Servicios
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portafolio
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portafolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Detalles
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Detalles del Blog
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Paginas
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contacto
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Equipo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Detalles del equipo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Experiencia
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              Datos
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="" alt="ALPHATECH" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
            ¿Tienes un proyecto en  <br /> mente?
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contactanos" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Suscribete"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="tucorreo@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
